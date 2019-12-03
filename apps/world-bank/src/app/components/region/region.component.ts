import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'ab-WorldBank-region',
  templateUrl: './region.component.html',
  styles: []
})
export class RegionComponent {
  listadoRegionesContinentales: any[] = [];

  constructor(private regiones: PaisesService ) {
    this.regiones.getRegionContinental()
    .subscribe((resp: any )=>{
      console.log(resp[1]);
      this.listadoRegionesContinentales = resp[1];
    });
   }
}
