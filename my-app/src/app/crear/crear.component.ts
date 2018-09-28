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
    let direccion = `${this.lugar.calle},${this.lugar.ciudad},${this.lugar.pais}`;
    this.lugaresService.obtenerGeoData(direccion)
        .subscribe((result:any)=>{
          this.lugar.lat = result.results[0].geometry.location.lat;
          this.lugar.lng = result.results[0].geometry.location.lng;

          
          this.lugaresService.guardarLugar(this.lugar);
        });
    
  }
}
