import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoPolarComponent } from './grafico-polar.component';

describe('GraficoPolarComponent', () => {
  let component: GraficoPolarComponent;
  let fixture: ComponentFixture<GraficoPolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoPolarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoPolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
