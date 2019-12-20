import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Region } from '../../Model/region'
import { map } from 'rxjs/operators'
import { iif } from 'rxjs';

@Component({
  selector: 'ab-world-bank-home',
  templateUrl: './home.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  public titulo: string;
  listadoFiltradoId: any[] = [];
  listadoRegionesGeograficas: Region[] = [];
  listado: Region[];
  banderaFiltrado: boolean;

  constructor( private regiones: PaisesService, private cdr: ChangeDetectorRef ) {
    this.titulo = "World Bank";
    this.leerRegiones();
  }

  leerRegiones(){
    this.regiones.getRegionesGeograficas()
    .pipe(
      map(r => r[1].map(i => {
        return {
          Id: i.id,
          Codigo: i.code,
          CodigoISO2: i.iso2code,
          Nombre: i.name
        }
      }))
    )
    .subscribe((resp: Region[] )=>{
      this.listado = resp;
      this.listadoRegionesGeograficas = this.listado;
      this.banderaFiltrado = false;
      this.cdr.markForCheck();
    });
  }

  filtrarRegiones(){
    if (this.banderaFiltrado == true)
      this.leerRegiones();
    else
    this.listadoRegionesGeograficas = this.listado.filter(r => r.Id !== '');
    this.banderaFiltrado = true;
    this.cdr.markForCheck();
  }
}
