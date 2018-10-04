import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData:any = {};

  constructor(private autorizacionService: AuthorizationService) { }

  ngOnInit() {
  }

  
  login(){
    this.autorizacionService.login(this.loginData.email,this.loginData.password);
  }

  facebookLogin(){
    this.autorizacionService.facebookLogin();
  }

}
