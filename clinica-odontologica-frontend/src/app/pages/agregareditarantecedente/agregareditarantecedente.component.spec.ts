import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregareditarantecedenteComponent } from './agregareditarantecedente.component';

describe('AgregareditarantecedenteComponent', () => {
  let component: AgregareditarantecedenteComponent;
  let fixture: ComponentFixture<AgregareditarantecedenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregareditarantecedenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregareditarantecedenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
