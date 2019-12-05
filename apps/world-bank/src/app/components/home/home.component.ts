import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'ab-WorldBank-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  listadoFiltradoId: any[] = [];
  listadoRegionesGeograficas: any[] = [];

  constructor( private regiones: PaisesService ) {
    this.leerRegiones();
  }

  leerRegiones(){
    this.regiones.getRegionesGeograficas()
      .subscribe((resp: any )=>{
        this.listadoRegionesGeograficas = resp[1];
      });
  }

  filtrarRegiones(){
    this.listadoFiltradoId = [];
    this.listadoRegionesGeograficas.forEach(element => {
      if (element.id != ""){
        this.listadoFiltradoId.push(element);
      }
    });
    this.listadoRegionesGeograficas = this.listadoFiltradoId;
  }
}
