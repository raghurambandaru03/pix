import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../../services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public headerForm: any;

  constructor(private jwtService: JwtService, private router: Router) {

    this.headerForm = {
      selectedbrand: '0'
    };

  }

  ngOnInit() {
  }

  signup(type: any) {
    if (this.jwtService.getToken()) {
      if (type === 'createevangeaccount') {
        this.router.navigate(['signup/createevangeaccount']);
      } else if (type === 'createmanangeracc') {
        this.router.navigate(['signup/createmanangeracc']);
      }
    } else {
      this.router.navigate(['signin']);
    }
  }

}
