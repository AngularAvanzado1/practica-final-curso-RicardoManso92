import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'ab-WorldBank-region',
  templateUrl: './region.component.html',
  styles: []
})
export class RegionComponent {
  datosRegion : any[] = [];
  listadoPaises : any[] = [];
  constructor(private router: ActivatedRoute,
              private region: PaisesService,
              private paisesRegion: PaisesService) {

    this.router.params.subscribe( params => {

      this.getRegion( params['code'] );
      this.getPaisesRegion( params['code'] );
    });
   }

  getRegion( code: string){
    this.region.getRegionContinental(code)
      .subscribe(region => {
        this.datosRegion = region[0];
        console.log("REGION " + region);
      });
  }

  getPaisesRegion( code : string){
    this.paisesRegion.getPaisesRegionContinental(code)
    .subscribe(paises => {
      this.listadoPaises = paises[1];
      console.log(paises);
  });
  }
}
