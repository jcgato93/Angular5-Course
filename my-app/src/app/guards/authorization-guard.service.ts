import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuardService implements CanActivate {

  isLogged: boolean = false
    constructor(private authService: AuthorizationService) {

        authService.isLogged().subscribe(result => {

            if (result && result.uid)
                this.isLogged = true
            else
                this.isLogged = false

        }, err => {
            this.isLogged = false         
        })
    }

    
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.isLogged;
    }

}
