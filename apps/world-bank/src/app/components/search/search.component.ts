import { Component} from '@angular/core';

@Component({
  selector: 'ab-WorldBank-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  constructor() {

  }

  Buscar(textoBusqueda : string){
    console.log(textoBusqueda)

  }

}
