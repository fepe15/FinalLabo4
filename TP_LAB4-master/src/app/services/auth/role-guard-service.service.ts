// import { Injectable } from '@angular/core';
// import { 
//   Router,
//   CanActivate,
//   ActivatedRouteSnapshot
// } from '@angular/router';
// import { AuthService } from './auth.service';
// // import decode from 'jwt-decode';


// @Injectable()
// export class RoleGuardService implements CanActivate {
//   constructor(public auth: AuthService, public router: Router) {}
//   canActivate(route: ActivatedRouteSnapshot): boolean {

//     const expectedRole = route.data.expectedRole;
//     const token = localStorage.getItem('token');
//     // const tokenPayload = decode(token);
//   //   console.log(expectedRole,tokenPayload.data.perfil );
    
//   //   if ( !this.auth.isAuthenticated() || tokenPayload.data.perfil !== expectedRole ) {
//   //     this.router.navigate(['login']);
//   //     return false;
//   //   }
//   //   return true;
//   // }
// }