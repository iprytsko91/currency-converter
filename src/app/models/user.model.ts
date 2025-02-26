export interface UserModel {
  name: string;
  email: string;
}

export interface StoredUserModel extends UserModel{
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData extends SignInData {
  name: string;
}
