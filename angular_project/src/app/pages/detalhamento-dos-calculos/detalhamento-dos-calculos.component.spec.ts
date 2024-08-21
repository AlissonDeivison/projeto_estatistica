import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoDosCalculosComponent } from './detalhamento-dos-calculos.component';

describe('DetalhamentoDosCalculosComponent', () => {
  let component: DetalhamentoDosCalculosComponent;
  let fixture: ComponentFixture<DetalhamentoDosCalculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhamentoDosCalculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhamentoDosCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
