import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor( private http: HttpClient) {
    console.log('Paises service listo')
  }

  getRegionesGeograficas(){
    return this.http.get('http://api.worldbank.org/v2/region/?format=json');
  }

  getRegionContinental( code: string){
    return this.http.get(`http://api.worldbank.org/v2/region/${ code }?format=json`);
  }

  getPaisesRegionContinental( code: string){
    return this.http.get(`http://api.worldbank.org/v2/region/${ code }/country?format=json`);
  }

  getPaises(){
    return this.http.get('http://api.worldbank.org/V2/country/ESP?format=json');
   }

}
