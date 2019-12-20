import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Region } from '../../Model/region';

@Component({
  selector: 'ab-world-bank-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent {

  @Input() Regiones: Region[];

  constructor( private router: Router) {}

  verRegion(reg:Region){
    this.router.navigate(['/region', reg.Codigo]);
  }
}
