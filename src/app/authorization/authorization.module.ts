import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { IonicModule } from "@ionic/angular";

import { AuthorizationComponent } from "./authorization.component";
import { AuthorizationRoutingModule } from "./authorization-routing.module";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { FormsModule } from "@angular/forms";


const Components = [
  AuthorizationComponent,
  SignUpComponent,
  SignInComponent
]


@NgModule({
  declarations: [...Components],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    IonicModule,
    NgOptimizedImage,
    FormsModule
  ]
})
export class AuthorizationModule {
}
