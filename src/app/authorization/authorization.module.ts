import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
    AuthorizationRoutingModule,
    IonicModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthorizationModule {
}
