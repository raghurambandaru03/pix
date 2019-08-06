import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { MaterialModule } from '../shared/modules/material/material.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CreateBrandmanagerComponent } from './components/create-brandmanager/create-brandmanager.component';
import {MatSelectModule} from '@angular/material/select';
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './../helpers/fake-backend';

import { AuthService } from '../services/auth.service';
// import {AlertComponent } from '../_components';
import { AuthenticationService } from '../services/authentication.service';
import {ApiService } from '../services/api.service';
import {JwtService} from '../services/jwt.service';
@NgModule({
  declarations: [HomeComponent,
     LoginComponent,
      ForgetpasswordComponent,
       SignUpComponent,
      // AlertComponent,
        CreateAccountComponent,
         CreateBrandmanagerComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MaterialModule,
    MatSelectModule,
    FilePondModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    fakeBackendProvider,
    AuthenticationService,
    AuthService,
    ApiService,
    JwtService,
    MockBackend,
    BaseRequestOptions],
})
export class HomeModule { }
