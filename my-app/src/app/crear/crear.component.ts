import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  lugar:any = {};
  constructor(private lugaresService:LugaresService) {

    
   }

  ngOnInit() {
  }


  guardarLugar(){
    this.lugaresService.guardarLugar(this.lugar);
  }
}
