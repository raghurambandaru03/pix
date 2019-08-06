import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtService } from '../../../services/jwt.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from '../../../services/api.service';

export interface LoginFormData {
  username: String;
  password: String;
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  invalidLogin: boolean;
  user: any;
  constructor(
    private router: Router,
    private jwtService: JwtService,
    private authentication: AuthenticationService,
    private apiService: ApiService
  ) {
    this.user = {
      username: '',
      password: '',
      scope: 'USER',
      grant_type: 'password'
    };
   }

  ngOnInit() {
  }

  login() {
    const formData = new FormData();
    formData.append('username', this.user.username);
    formData.append('password', this.user.password);
    formData.append('scope', this.user.scope);
    formData.append('grant_type', this.user.grant_type);
    this.apiService.login(formData).subscribe(
      (res: any) => {
        if (res) {
          this.router.navigate(['/']);
          this.jwtService.saveToken(JSON.stringify(res));
        } else {
         console.log(res.message);
        }
      },
      err => {

      });
  }
}
