import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
