import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'ab-WorldBank-pais',
  templateUrl: './pais.component.html',
  styles: []
})
export class PaisComponent {

  datosPais : any;

  constructor(private pais: PaisesService,
    private router : ActivatedRoute ) {
      this.router.params.subscribe( params => {
         this.getPais(params['id']);
        });
      }
    getPais( code: string){
      this.pais.getPais(code)
        .subscribe(respDatosPais => {
          this.datosPais = respDatosPais[1];
        });
    }
}
