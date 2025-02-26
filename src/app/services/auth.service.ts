import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage-angular";
import md5 from 'md5';
import { Store } from "@ngxs/store";

import { SignInData, SignUpData, StoredUserModel, UserModel } from "../models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private storage: Storage, private store: Store) {
  }

  async signIn(signInData: SignInData): Promise<UserModel> {
    if (signInData.email && signInData.password) {
      const encryptedPassword = md5(signInData.password);
      const user = await this.getUser(signInData.email)

      if (user?.password === encryptedPassword) {
        const authUser: UserModel = {
          name: user.name,
          email: user.email,
        }

        await this.saveAuthToken(md5(authUser.email));
        await this.saveAuthUser(authUser);

        return Promise.resolve(authUser)
      }

      return Promise.reject('Invalid email or password');
    }

    return Promise.reject('Invalid email or password');
  }

  async signUp(signupData: SignUpData): Promise<UserModel> {
    if (signupData.name && signupData.email && signupData.password) {

      const encryptedPassword = md5(signupData.password);
      const newUser: StoredUserModel = {
        name: signupData.name,
        email: signupData.email,
        password: encryptedPassword
      };

      return this.addUser(newUser);
    } else {
      return Promise.reject('Unknown Error, Try again');
    }
  }

  async signOut(): Promise<void> {
    await this.deleteAuthToken();
    await this.deleteAuthUser();
    location.reload();
  }

  async isAuthenticated(): Promise<boolean> {
    const token = await this.getAuthToken();

    if (token) {
      return Promise.resolve(true)
    }

    return Promise.resolve(false);
  }

  async saveAuthToken(token: string): Promise<void> {
    return this.storage.set('auth_token', token);
  }

  async deleteAuthToken(): Promise<void> {
    return this.storage.remove('auth_token');
  }

  async getAuthToken(): Promise<string> {
    return this.storage.get('auth_token');
  }

  async saveAuthUser(user: UserModel): Promise<void> {
    return this.storage.set('auth_user', user);
  }

  async deleteAuthUser(): Promise<void> {
    return this.storage.remove('auth_user');
  }

  async getAuthUser(): Promise<UserModel> {
    return await this.storage.get('auth_user');
  }

  // Better to have it somewhere in different service on BE, but for this task let it be for quick access
  private async getUsers(): Promise<StoredUserModel[]> {
    return await this.storage.get('users') || [];
  }

  private async addUser(user: StoredUserModel): Promise<UserModel> {
    const users: StoredUserModel[] = await this.getUsers();

    if (users.some(item => item.email === user.email)) {
      return Promise.reject('User already exists');
    }

    await this.storage.set('users', [...users, user]);

    return Promise.resolve(<UserModel>{
      name: user.name,
      email: user.email,
    });
  }

  private async getUser(email: string): Promise<StoredUserModel | undefined> {
    const users: StoredUserModel[] = await this.getUsers();

    const user = users.find((user) => user.email === email);

    return Promise.resolve(user)
  }
}
