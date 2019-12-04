import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'ab-WorldBank-pais',
  templateUrl: './pais.component.html',
  styles: []
})
export class PaisComponent {

  @Input() idPais : string;
  datosPais : any;

  constructor(private regiones: PaisesService,
    private router : ActivatedRoute ) {
      this.router.params.subscribe( params => {
        console.log(params);
       // this.regiones.getPaises(this.idPais);
        });
      }

}
