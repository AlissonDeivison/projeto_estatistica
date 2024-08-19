import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoDeUsoComponent } from './caso-de-uso.component';

describe('CasoDeUsoComponent', () => {
  let component: CasoDeUsoComponent;
  let fixture: ComponentFixture<CasoDeUsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasoDeUsoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasoDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
