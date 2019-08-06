import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { JwtService } from './jwt.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};
@Injectable()

export class ApiService {
  constructor(private http: HttpClient, private jwtService: JwtService) { }

    private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (this.jwtService.getToken()) {
      headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
    }
    return new HttpHeaders (headersConfig);
  }

  getToken() {
    if (this.jwtService.getToken()) {
      return `Token ${this.jwtService.getToken()}`;
    } else {
      return null;
    }
  }


  private formatErrors(error: any) {
     return Observable.throw(error.json());
  }

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`);
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {headers: this.setHeaders()}
    )
    // .map((res: Response) => res.json())
    .catch((error: Response) => {
      return Observable.throw(error.json());
    });
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, body);
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      {headers: this.setHeaders()}
    )
    // .map((res: Response) => res.json())
    .catch((error: Response) => {
      return Observable.throw(error.json());
    });
  }

  login(data: any): Observable<any> {
    return this.http.post(`${environment.api_url}oauth/token`, data);
  }
}
