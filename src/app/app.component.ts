import { Component } from '@angular/core';
import { resolve } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre    : string = 'Capitan America';
  nombre2   : string = 'jaIme mONCada hErnandez';

  arreglo = [1,2,3,4,5,6,7,8,9];
  PI        :number = Math.PI;
  porcentaje:number = 0.235;
  salario   :number = 1234.5;
  Fecha     :Date   = new Date();
  videoUrl  : string = 'https://www.youtube.com/embed/xat1GVnl8-k';
  activar   :boolean = true;

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data putos');
    }, 4500);
  });

  heroe = {
     nombre: 'logan',
     clave: 'wolverine',
     edad: 500,
     direccion: {
        calle: 'primera',
        numero : 20
     }
  }
}
