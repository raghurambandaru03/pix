import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {CreateAccountComponent} from './components/create-account/create-account.component';
import { CreateBrandmanagerComponent } from './components/create-brandmanager/create-brandmanager.component';
import { AuthGuard } from './../helpers/auth.guard';
const routes: Routes = [
  {
    path: '', children: [
      {
        path: '', component: LoginComponent,
      },
      {
        path: 'home', component: LoginComponent
      },
      {
        path: 'forgotpwd', component: ForgetpasswordComponent
      },
      {
        path: 'signin', component: SignUpComponent
      },
      {
        path: 'signup', component: CreateAccountComponent
      },
      {
        path: 'signup/:id', component: CreateBrandmanagerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
