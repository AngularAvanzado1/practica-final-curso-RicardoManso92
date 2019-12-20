import { TestBed, async } from '@angular/core/testing';
import { PaisComponent } from './pais.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('GIVEN: an PaisComponent declared in PaisModule', () => {
  describe('WHEN: the PaisModule is compiled', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpClientModule],
        declarations: [PaisComponent]
      }).compileComponents();
    }));

    it('THEN: should create the component', () => {
      const fixture = TestBed.createComponent(PaisComponent);
      const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    });

    /*it(`THEN: should render 'País' in a H1 tag`, () => {
      const fixture = TestBed.createComponent(PaisComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('País:');
    });*/
  });
});
