import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id = null;
  lugar:any = {};
  constructor(private route:ActivatedRoute,
             private lugaresServices: LugaresService) {


      console.log(this.route.snapshot.params['id']);  
      console.log(this.route.queryParams);

      this.id = this.route.snapshot.params['id'];
      
      this.lugar= lugaresServices.buscarLugar(this.id);
  }

  ngOnInit() {
  }





}
