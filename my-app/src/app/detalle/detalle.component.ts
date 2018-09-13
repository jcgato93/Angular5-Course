import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  lugares:any  =  [
    {id: 1,plan: 'gratuito',cercania: 1, distancia: 1, active: true, nombre: 'Floreria la gardenia', descripcion: 'Descripcion de este negocio, más adelante tendremos mas información'},
    {id: 2,plan: 'pagado',cercania: 2, distancia: 1.8, active: true, nombre: 'Donas la pasadita', descripcion: 'Descripcion de este negocio, más adelante tendremos mas información'},
    {id: 3,plan: 'gratuito',cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Herllitas Felices', descripcion: 'Descripcion de este negocio, más adelante tendremos mas información'},
    {id: 4,plan: 'pagado',cercania: 3, distancia: 10, active: true, nombre: 'Hotel la Gracia', descripcion: 'Descripcion de este negocio, más adelante tendremos mas información'},
    {id: 5,plan: 'gratuito',cercania: 3, distancia: 35, active: true, nombre: 'Zapateria el clavo', descripcion: 'Descripcion de este negocio, más adelante tendremos mas información'},
  ]

  id = null;
  lugar:any = {};
  constructor(private route:ActivatedRoute) {
      console.log(this.route.snapshot.params['id']);  
      console.log(this.route.queryParams);

      this.id = this.route.snapshot.params['id'];
      this.lugar= this.buscarLugar();
  }

  ngOnInit() {
  }

  /**
   *Busca en el array el id que concuerde con el que se pasa por parametro 
   */
buscarLugar(){
  return this.lugares.filter((lugar) =>  {return lugar.id == this.id})[0] || null;
}


}
