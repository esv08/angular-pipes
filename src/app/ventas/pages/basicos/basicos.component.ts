import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'santiago';
  nombreUpper: string = 'SANTIAGO';
  nombreCompleto: string = 'SaNtIAgo vEnEGAs';

  fecha: Date = new Date();       //Establece la fecha actual, el dia que se defina es lo que tendra como valor.


}
