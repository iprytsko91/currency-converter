import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationComponent } from "./authorization.component";
import { AuthorizationRoutingModule } from "./authorization-routing.module";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";


const Components = [
  AuthorizationComponent,
  SignUpComponent,
  SignInComponent
]


@NgModule({
  declarations: [...Components],
  imports: [
    CommonModule,
    AuthorizationRoutingModule
  ]
})
export class AuthorizationModule {
}
