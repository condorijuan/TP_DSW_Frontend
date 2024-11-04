import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DientesComponent } from './dientes.component';

describe('DientesComponent', () => {
  let component: DientesComponent;
  let fixture: ComponentFixture<DientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
