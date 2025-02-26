import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";

import { UserModel } from "../models";
import { AuthService } from "../services";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {
  user$: Subject<UserModel> = new Subject<UserModel>();
  readonly imagePath: string = 'assets/img/currency-converter-logo.webp';

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.updateUser();
  }

  signOut() {
    this.authService.signOut()
  }

  async updateUser() {
    const user = await this.authService.getAuthUser()
    this.user$.next(user)
  }
}
