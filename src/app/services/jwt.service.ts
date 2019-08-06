import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {

  constructor() { }

  getToken(): String {
    return localStorage.getItem('app-auth-user');
  }

  saveToken(token: string) {
    localStorage.setItem('app-auth', 'true');
    localStorage.setItem('app-auth-user', token);
  }

  destroyToken() {
    localStorage.removeItem('app-auth-user');
  }
}
