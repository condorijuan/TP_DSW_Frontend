import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarasComponent } from './caras.component';

describe('CarasComponent', () => {
  let component: CarasComponent;
  let fixture: ComponentFixture<CarasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
