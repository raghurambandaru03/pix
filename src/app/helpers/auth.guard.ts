import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../services/authentication.service';
import { take } from 'rxjs/operators';
import 'rxjs/add/operator/take'; 
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<boolean> {
        //return this.userService.isAuthenticated.take(1);
        return this.authenticationService.isAuthenticated.pipe(take(1)).map(bool => {
          if (bool) {
            let role = this.authenticationService.getCurrentUser().userType.toLocaleLowerCase();
            let currentUrl = state.url.toLowerCase().split('/')[1];
            
            if(role === currentUrl){
                return bool
            }else{
              this.router.navigate(['/']);
            }
            
          }
          else{
            this.router.navigate(['/']);
          }
        });
      }
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     const currentUser = this.authenticationService.currentUserValue;
    //     if (currentUser) {
    //         // authorised so return true
    //         return true;
    //     }

    //     // not logged in so redirect to login page with the return url
    //     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    //     return false;
    // }
}