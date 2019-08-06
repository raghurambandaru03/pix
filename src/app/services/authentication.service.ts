import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response } from "@angular/http";

import { ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ApiService } from '../services/api.service';
import {JwtService} from '../services/jwt.service';
import { User } from './../_models';
import { distinctUntilChanged } from 'rxjs/operators';
import 'rxjs/add/operator/distinct';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  
    private currentUserSubject = new BehaviorSubject<any>({});
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
  
    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();
    constructor(private apiService: ApiService,
        private http: Http,
        private jwtService: JwtService) {
        // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        // this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    getCurrentUser(): any {
      return this.currentUserSubject.value;
    }
    populate() {
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
          this.apiService.get('oauth/token')
            .subscribe(
            data => {
              this.setAuth(data)
            },
            err => {
              this.purgeAuth()
            }
            );
        } else {
          // Remove any potential remnants of previous auth states
          this.purgeAuth();
        }
      }
      setAuth(data) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(data.token);
        // Set current user data into observable
        this.currentUserSubject.next(data.user);
        this.isAuthenticatedSubject.next(true);
      }
      purgeAuth() {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next(new User());
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
      }
      attemptAuth(credentials) {
        const route = 'oauth/token';
        return this.apiService.post(route, credentials).subscribe((data) => {
            if (data) {
              this.setAuth(data);
              return data.user;
            } else  {
              return data;
            }
          },
          err => {
            return err;
          }
          )
      }
    // login(username, password) {
    //     return this.http.post<any>(`${config.apiUrl}/oauth/token`, { username, password })
    //         .pipe(map(user => {
    //             // store user details and jwt token in local storage to keep user logged in between page refreshes
    //             localStorage.setItem('currentUser', JSON.stringify(user));
    //             this.currentUserSubject.next(user);
    //             return user;
    //         }));
    // }

    // logout() {
    //     // remove user from local storage and set current user to null
    //     localStorage.removeItem('currentUser');
    //     this.currentUserSubject.next(null);
    // }
}