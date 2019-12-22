import { TestBed, async } from '@angular/core/testing';
import { RegionComponent } from './region.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('GIVEN: an RegionComponent declared', () => {
  describe('WHEN: the RegionComponent is compiled', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpClientModule],
        declarations: [RegionComponent]
      }).compileComponents();
    }));

    it('THEN: should create the component', () => {
      const fixture = TestBed.createComponent(RegionComponent);
      const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    });
  });
});

