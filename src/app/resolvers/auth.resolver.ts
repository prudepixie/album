import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import AuthService from '../services/auth.service';


@Injectable()
export class AuthResolver implements Resolve<any> {
  constructor(private authService: AuthService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.authService.listenForAuthChanges()
    return
  }
}