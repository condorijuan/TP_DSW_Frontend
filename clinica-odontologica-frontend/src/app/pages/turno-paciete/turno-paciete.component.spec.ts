import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoPacieteComponent } from './turno-paciete.component';

describe('TurnoPacieteComponent', () => {
  let component: TurnoPacieteComponent;
  let fixture: ComponentFixture<TurnoPacieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnoPacieteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnoPacieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
