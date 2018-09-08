import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'a[contar-clicks]' //el 'a' indica que solo se usara un anchore 
})
export class ContarClicksDirective {

  clickN = 0;

  @HostListener('click',['$event.target']) onClick(btn){
    console.log('a',btn,"Número de Clicks:", this.clickN++);
  }

  constructor() { }

}
