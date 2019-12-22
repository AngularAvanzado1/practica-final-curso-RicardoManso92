import { createAction, props } from '@ngrx/store';
import { Pais } from '../../../Model/pais'

export const leerPaises = createAction(
  '[Store] Leer Paises',
  props< {data: string}>()
);

export const paisesLeidos = createAction(
  '[Store] Paises Leidos',
  props<{ data: any }>()
);

export const errorLeerPaises = createAction(
  '[Store] Error Leer Paises',
  props<{ error: string }>()
);
