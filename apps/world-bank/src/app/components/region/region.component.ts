import { Component, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisesService } from '../../services/paises.service';
import { Store } from '@ngrx/store';
import { leerPaises } from '../pais/store/store.actions';
import { selectPaises} from '../pais/store/store.selectors';

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
              private paisesRegion: PaisesService,
              private store: Store<any>) {

    this.activatedRoute.params.subscribe( params => {

      this.getRegion( params['code'] );
      this.getPaisesRegion( params['code'] );
    });

    this.store.select(selectPaises).subscribe(res=>{
      this.listadoPaises = res.paises
    })
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
    this.store.dispatch(leerPaises({
      data: code
    }));
  }
}
