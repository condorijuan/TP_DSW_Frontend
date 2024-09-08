import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAntecedenteComponent } from './tipo-antecedente.component';

describe('TipoAntecedenteComponent', () => {
  let component: TipoAntecedenteComponent;
  let fixture: ComponentFixture<TipoAntecedenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoAntecedenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoAntecedenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
