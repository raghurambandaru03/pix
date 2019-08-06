import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', credentials).subscribe(response => {
        if (response) {
          localStorage.setItem('token', JSON.stringify(response));
          return true;
        }
        return false;
      });
  }

  logout() { 
    localStorage.removeItem('token');

  }

  isLoggedIn() { 
    return tokenNotExpired();
  //   let jwthelp = new JwtHelper();
  //   let token = localStorage.getItem('token');

  //   if(!token){
  //   return false;
  // }

  // let expiry = jwthelp.getTokenExpirationDate(token);
  // let isexpiry = jwthelp.isTokenExpired(token);
  // console.log(expiry);
  // console.log(isexpiry);
  //   return !isexpiry;
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if (!token){
      return null;
    }
    let jwtHelp = new JwtHelper();
    return jwtHelp.decodeToken(token);
  }
}

