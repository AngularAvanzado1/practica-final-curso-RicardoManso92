import { TestBed, async } from '@angular/core/testing';

import { PaisesService } from './paises.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('GIVEN: PaisesService es declarado', () => {
  describe('WHEN: El AppModule es compilado', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports:[],
        declarations:[],
        providers: [PaisesService,HttpClient,HttpHandler],
        schemas: []
      }).compileComponents();
    }));

    it('THEN: PaisesService creado', () => {
      const service: PaisesService = TestBed.get(PaisesService);
      expect(service).toBeTruthy();
    });
  });
});
