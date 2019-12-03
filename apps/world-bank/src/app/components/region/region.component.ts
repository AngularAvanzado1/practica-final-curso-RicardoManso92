import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'ab-WorldBank-region',
  templateUrl: './region.component.html',
  styles: []
})
export class RegionComponent {
  constructor(private router: ActivatedRoute,
              private region: PaisesService) {

    this.router.params.subscribe( params => {
      this.getRegion( params['code'] );
    });
   }

   getRegion( code: string){

    this.region.getRegionContinental(code)
      .subscribe(region=>{
        console.log(region);
      });
   }
}
