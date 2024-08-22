import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarianciaEDesvioPadraoComponent } from './variancia-e-desvio-padrao.component';

describe('VarianciaEDesvioPadraoComponent', () => {
  let component: VarianciaEDesvioPadraoComponent;
  let fixture: ComponentFixture<VarianciaEDesvioPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VarianciaEDesvioPadraoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarianciaEDesvioPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
