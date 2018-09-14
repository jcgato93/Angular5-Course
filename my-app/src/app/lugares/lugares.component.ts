import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  
  ngOnInit(): void {
    
  }

  title = 'my-app';  
  lat: number = 51.678418;
  lng: number = 7.809007;
  lugares = null;

  constructor(private lugaresService: LugaresService){
      this.lugares = lugaresService.getLugares();
  }

}
