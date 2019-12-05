import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'ab-WorldBank-pais',
  templateUrl: './pais.component.html',
  styles: []
})
export class PaisComponent {

  datosPais : any;

  constructor(private pais: PaisesService,
    private router : Router,
    private activatedRouter : ActivatedRoute ) {
      this.activatedRouter.params.subscribe( params => {
         this.getPais(params['id']);
        });
      }
    getPais( code: string){
      this.pais.getPais(code)
        .subscribe(respDatosPais => {
          console.log(respDatosPais);
          this.datosPais = respDatosPais[1];
        });
    }

    verRegion( region : any ){
      this.router.navigate(['/region', region]);
    }
}
