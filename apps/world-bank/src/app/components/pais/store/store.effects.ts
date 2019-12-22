import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as StoreActions from './store.actions';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class StoreEffects {

  loadStores$ = createEffect(() => this.actions$.pipe(
    ofType(StoreActions.leerPaises),
    concatMap(action =>
    this.http.get<any>(`http://api.worldbank.org/v2/region/${ action.data }/country?format=json`).pipe(
         map(data => StoreActions.paisesLeidos({ data })),
         catchError(error => of(StoreActions.errorLeerPaises({ error }))))
    )
  ));



  constructor(private actions$: Actions, private http: HttpClient) {}

}
