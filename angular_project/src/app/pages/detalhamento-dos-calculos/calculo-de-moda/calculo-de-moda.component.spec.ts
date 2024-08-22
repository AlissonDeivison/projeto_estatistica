import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoDeModaComponent } from './calculo-de-moda.component';

describe('CalculoDeModaComponent', () => {
  let component: CalculoDeModaComponent;
  let fixture: ComponentFixture<CalculoDeModaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculoDeModaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoDeModaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
