import { Component } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter, tap } from "rxjs";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  standalone: false
})
export class AuthorizationComponent {
  imagePath: string = 'assets/img/currency-converter.webp'
  showAuthActions: boolean = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        tap(() => {
          this.showAuthActions = this.router.url !== '/auth/sign-in' && this.router.url !== '/auth/sign-up';
        })
      )
      .subscribe();
  }
}
