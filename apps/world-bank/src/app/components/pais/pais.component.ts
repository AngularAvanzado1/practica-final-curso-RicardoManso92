import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'ab-WorldBank-pais',
  templateUrl: './pais.component.html',
  styles: []
})
export class PaisComponent {

  listadoPaises: any[] = [];

  constructor(private regiones: PaisesService ) {
    this.regiones.getPaises()
    .subscribe((resp: any )=>{
      console.log(resp[1]);
      this.listadoPaises = resp[1];
    });
   }

}
