import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable()


export class AuthGuardService implements CanActivate {
  
   info= this.auth.GetPayLoad();
  
  constructor(public auth: AuthService, public router: Router) {}
  
  

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);

      return false;
    }

  
  //  console.log(this.info);
    return true;
  }
}
