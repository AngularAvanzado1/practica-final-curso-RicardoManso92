import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PaisComponent } from './components/pais/pais.component';
import { RegionComponent } from './components/region/region.component';

export const ROUTES: Routes =[
  {path: 'home', component: HomeComponent },
  {path: 'search', component: SearchComponent },
  {path: 'pais/:id', component: PaisComponent },
  {path: 'region/:code', component: RegionComponent },
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
]
