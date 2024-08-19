import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalosComponent } from './intervalos.component';

describe('IntervalosComponent', () => {
  let component: IntervalosComponent;
  let fixture: ComponentFixture<IntervalosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntervalosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
