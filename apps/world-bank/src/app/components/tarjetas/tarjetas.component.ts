import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-WorldBank-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent {


  @Input() items: any[] = [];

  constructor( private router: Router) {


  }

  verRegion(item:any){

    let regionCode;

    regionCode = item.code;
    console.log(item.code);

    this.router.navigate(['/region', regionCode]);
  }
}
