import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NavigationEnd, Router } from "@angular/router";
import { filter, tap } from "rxjs";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  standalone: false
})
export class AuthorizationComponent implements OnInit {
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

  ngOnInit() {
  }

  // signIn(): void {
  //   this.navController.navigateForward('sign-in', {
  //     animated: true,
  //     animationDirection: 'forward',
  //   });
  // }

}
