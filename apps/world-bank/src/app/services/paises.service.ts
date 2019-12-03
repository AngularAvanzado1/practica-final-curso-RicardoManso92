import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor( private http: HttpClient) {
    console.log('Paises service listo')
  }

  getRegionGeografica(){
    return this.http.get('http://api.worldbank.org/v2/region/?format=json');
  }

  getRegionContinental(){
    return this.http.get('http://api.worldbank.org/v2/region/ECS/country?per_page=1000&format=json');
  }

  getPaises(){
    return this.http.get('http://api.worldbank.org/V2/country/ESP?format=json');
   }

}
