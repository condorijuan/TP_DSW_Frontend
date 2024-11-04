import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDientesComponent } from './editar-dientes.component';

describe('EditarDientesComponent', () => {
  let component: EditarDientesComponent;
  let fixture: ComponentFixture<EditarDientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarDientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
