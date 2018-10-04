import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro:any = {

  }

  constructor(private autorizacionService : AuthorizationService) { }

  ngOnInit() {
  }


  registrar(){
    this.autorizacionService.registro(this.registro.email,this.registro.password);
  }


}
