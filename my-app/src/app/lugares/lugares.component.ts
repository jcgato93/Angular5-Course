import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  
  ngOnInit(): void {
    
  }

  title = 'my-app';
  lugares:any  =  [
    {id: 1,plan: 'gratuito',cercania: 1, distancia: 1, active: true, nombre: 'Floreria la gardenia'},
    {id: 2,plan: 'pagado',cercania: 2, distancia: 1.8, active: true, nombre: 'Donas la pasadita'},
    {id: 3,plan: 'gratuito',cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Herllitas Felices'},
    {id: 4,plan: 'pagado',cercania: 3, distancia: 10, active: true, nombre: 'Hotel la Gracia'},
    {id: 5,plan: 'gratuito',cercania: 3, distancia: 35, active: true, nombre: 'Zapateria el clavo'},
  ]
  lat: number = 51.678418;
  lng: number = 7.809007;

}
