import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarOdontogramaComponent } from './agregar-editar-odontograma.component';

describe('AgregarEditarPacienteComponent', () => {
  let component: AgregarEditarOdontogramaComponent;
  let fixture: ComponentFixture<AgregarEditarOdontogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEditarOdontogramaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarOdontogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
