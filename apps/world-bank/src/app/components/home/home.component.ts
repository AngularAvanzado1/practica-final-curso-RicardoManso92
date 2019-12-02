import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'ab-WorldBank-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  constructor( private paises: PaisesService ) {

    this.paises.getPaises();

  }
}
