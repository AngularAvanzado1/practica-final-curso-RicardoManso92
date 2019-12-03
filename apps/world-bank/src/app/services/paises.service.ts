import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor( private http: HttpClient) {
    console.log('Paises service listo')
  }

  getPaises(){

    //const headers = new HttpHeaders({
    //  'Authorization': 'Token'
    //});

   return this.http.get('http://api.worldbank.org/v2/region/?format=json');
  //      .subscribe( (resp: any) => {
        //this.paises = resp;
  //      console.log(resp);
   //     console.log(resp[1]);
   //   });
  }
}
