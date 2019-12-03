import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'ab-WorldBank-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  listadoRegionesGeograficas: any[] = [];

  constructor( private paises: PaisesService ) {

    this.paises.getRegionGeografica()
      .subscribe((resp: any )=>{
        console.log(resp);
        this.listadoRegionesGeograficas = resp[1];
      });

  }
}
