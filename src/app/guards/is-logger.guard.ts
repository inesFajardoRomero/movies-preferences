import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

import {Observable} from 'rxjs';
import { SeguridadService } from '../services/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class isLoggerGuard implements CanActivate {


  constructor(private SeguridadService: SeguridadService,
    private router:Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.SeguridadService.isLogueado()){
        return true;
      }

      this.router.navigate(['modules/login']);
      return false;
  }
}
/* export const isLoggerGuard: CanActivateFn = (route, state) => {
  constructor(){

  }
  return true;
}; */
