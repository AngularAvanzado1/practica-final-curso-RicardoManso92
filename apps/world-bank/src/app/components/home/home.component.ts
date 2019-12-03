import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'ab-WorldBank-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  listadoPaises: any[] = [];

  constructor( private paises: PaisesService ) {

    this.paises.getPaises()
      .subscribe((resp: any )=>{
        console.log(resp[1]);
        this.listadoPaises = resp[1];
      });

  }
}
