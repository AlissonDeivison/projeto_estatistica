import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoeficienteDeVariacaoComponent } from './coeficiente-de-variacao.component';

describe('CoeficienteDeVariacaoComponent', () => {
  let component: CoeficienteDeVariacaoComponent;
  let fixture: ComponentFixture<CoeficienteDeVariacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoeficienteDeVariacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoeficienteDeVariacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
