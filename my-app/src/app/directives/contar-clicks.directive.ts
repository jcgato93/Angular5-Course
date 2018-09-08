import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: 'li[contar-clicks]' //el 'a' indica que solo se usara un anchore 
})
export class ContarClicksDirective {

  clickN = 0;
  @HostBinding('style.opacity') opacity: number = .1;

  @HostListener('click',['$event.target']) onClick(btn){
    console.log('a',btn,"Número de Clicks:", this.clickN++);
    this.opacity += .1;
  }

  constructor() { }

}
