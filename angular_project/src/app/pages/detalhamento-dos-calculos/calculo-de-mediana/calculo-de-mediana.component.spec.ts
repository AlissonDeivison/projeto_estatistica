import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoDeMedianaComponent } from './calculo-de-mediana.component';

describe('CalculoDeMedianaComponent', () => {
  let component: CalculoDeMedianaComponent;
  let fixture: ComponentFixture<CalculoDeMedianaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculoDeMedianaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoDeMedianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
