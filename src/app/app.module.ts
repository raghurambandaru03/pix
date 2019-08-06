import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/modules/material/material.module';
// import {MatSelectModule} from '@angular/material/select';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import { AuthService } from './services/auth.service';
import {AlertComponent } from './_components';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { ApiService } from './services/api.service';
import { JwtService } from './services/jwt.service';
import { AuthInterceptor } from './services/auth.interceptor';
// import and register filepond file type validation plugin
// import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
// registerPlugin(FilePondPluginFileValidateType);
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    // MatSelectModule,
    FilePondModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    fakeBackendProvider,
    AlertService,
    MockBackend,
    ApiService,
    JwtService,
    AuthenticationService,
    BaseRequestOptions,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
