import { Action, createReducer, on } from '@ngrx/store';
import * as StoreActions from './store.actions';
import { Pais } from '../../../Model/pais';

export const paisFeature = 'pais';

export interface State {
  paises: Pais[];
  error: String;
}

export const initialState: State = {
  paises: [],
  error: ""
};

const storeReducer = createReducer(
  initialState,

  on(StoreActions.leerPaises, state => state),
  on(StoreActions.paisesLeidos, (state, action) => {
    return{
      ...state,
      paises:action.data[1],
      error: null
    }
  }),
  on(StoreActions.errorLeerPaises, (state, action) => {
    return{
      ...state,
      error: action.error
    }
  }),

);

export function reducer(state: State | undefined, action: Action) {
  return storeReducer(state, action);
}
