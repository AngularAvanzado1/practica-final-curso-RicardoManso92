import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor( private http: HttpClient) {}

  getRegionesGeograficas(){
    return this.http.get('http://api.worldbank.org/v2/region?format=json');
  }

  getRegionContinental( code: string ){
    return this.http.get(`http://api.worldbank.org/v2/region/${ code }?format=json`);
  }

  getPaisesRegionContinental( code : string ){
    return this.http.get(`http://api.worldbank.org/v2/region/${ code }/country?format=json`);
  }

  getPais( id : string ){
    return this.http.get(`http://api.worldbank.org/V2/country/${ id }?format=json`);
   }

}
