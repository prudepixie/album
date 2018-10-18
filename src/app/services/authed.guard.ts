import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import AuthService from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthedGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(!this.authService.currentUser) return true

    this.router.navigate(['/feed'])
  }
}