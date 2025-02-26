import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { from, Observable, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";

import { AuthService } from "../auth.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return from(this.authService.isAuthenticated())
      .pipe(
        switchMap(res => {
          if (res) {
            return of(true);
          } else {
            this.router.navigate(['/auth']);
            return of(false);
          }
        })
      )
  }
}
