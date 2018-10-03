import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations: [
    trigger('nameTrigger',
    [
      state('nameState',style({
        opacity: 0,
        backgroundColor: 'green',
        transform: 'rotate3d(0,0,0,0deg)'
      })),
      state('nameStateFinal',style({
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'rotate3d(5,10,30,0deg)'
      })),

      transition('nameState => nameStateFinal', animate(1000)),
      transition('nameStateFinal => nameState', animate(500))

    ])
  ]
})
export class LugaresComponent implements OnInit {
  
  ngOnInit(): void {
    
  }

  //Example of animations
  state = 'nameState';

  animar(){
    this.state = (this.state === 'nameState') ? 'nameStateFinal' : 'nameState';
  }


  title = 'my-app';  
  lat: number = 51.678418;
  lng: number = 7.809007;
  lugares = null;

  constructor(private lugaresService: LugaresService){
      lugaresService.getLugares()
          .subscribe(lugares =>{            
            this.lugares =Object.values(lugares);
            debugger;
          },error =>{
            console.log(error)
          })
  }

}
