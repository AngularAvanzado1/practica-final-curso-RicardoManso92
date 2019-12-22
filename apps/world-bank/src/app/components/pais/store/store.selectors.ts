import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStore from './store.reducer';

export const selectPaises = createFeatureSelector<fromStore.State>(
  fromStore.paisFeature
);
