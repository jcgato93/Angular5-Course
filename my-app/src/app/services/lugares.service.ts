import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  lugares:any  =  [
    {id: 1,plan: 'gratuito',cercania: 1, distancia: 1, active: true, nombre: 'Floreria la gardenia'},
    {id: 2,plan: 'pagado',cercania: 2, distancia: 1.8, active: true, nombre: 'Donas la pasadita'},
    {id: 3,plan: 'gratuito',cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Herllitas Felices'},
    {id: 4,plan: 'pagado',cercania: 3, distancia: 10, active: true, nombre: 'Hotel la Gracia'},
    {id: 5,plan: 'gratuito',cercania: 3, distancia: 35, active: true, nombre: 'Zapateria el clavo'},
  ]

  constructor() { }

  /**
   * getLugares
   */
  public getLugares() {
    return this.lugares;
  }

  public buscarLugar(id){
    return this.lugares.filter((lugar) =>  {return lugar.id == id})[0] || null;
  }


}
