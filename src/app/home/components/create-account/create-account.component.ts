import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  loginForm:any

  constructor() {

    this.loginForm ={
      username :'',
    }

   }

  ngOnInit() {
  }

}
