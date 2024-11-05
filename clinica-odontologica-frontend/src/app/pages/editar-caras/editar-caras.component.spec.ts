import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCarasComponent } from './editar-caras.component';

describe('EditarCarasComponent', () => {
  let component: EditarCarasComponent;
  let fixture: ComponentFixture<EditarCarasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarCarasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
