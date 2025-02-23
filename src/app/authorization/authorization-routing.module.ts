import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizationComponent } from "./authorization.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";

const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent,
    // canActivate
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
        // canActivate
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        // canActivate
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizationRoutingModule {
}
