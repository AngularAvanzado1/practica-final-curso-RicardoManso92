import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'ab-world-bank-region',
  templateUrl: './region.component.html',
  styles: []
})
export class RegionComponent {
  datosRegion : any[] = [];
  listadoPaises : any[] = [];
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private region: PaisesService,
              private paisesRegion: PaisesService) {

    this.activatedRoute.params.subscribe( params => {

      this.getRegion( params['code'] );
      this.getPaisesRegion( params['code'] );
    });
   }

   verPais( pais : any ){
    this.router.navigate(['pais', pais.id]);
  }

  getRegion( code: string){
    this.region.getRegionContinental(code)
      .subscribe(region => {
        this.datosRegion = region[1];
      });
  }

  getPaisesRegion( code : string){
    this.paisesRegion.getPaisesRegionContinental(code)
    .subscribe(paises => {
      this.listadoPaises = paises[1];
  });
  }
}
