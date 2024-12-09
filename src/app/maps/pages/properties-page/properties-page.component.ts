import { Component } from '@angular/core';

interface House {
  title: string;
  description: string;
  lngLat: [number, number];
}



@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  public houses: House[] = [
    {
      title: 'Casa de Julio Noguera',
      description: 'Oficina de Julio Noguera',
      lngLat: [ -86.141764,12.016864 ]
    },

  ]


}
