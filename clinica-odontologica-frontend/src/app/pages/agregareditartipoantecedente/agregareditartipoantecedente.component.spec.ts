import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregareditartipoantecedenteComponent } from './agregareditartipoantecedente.component';

describe('AgregareditartipoantecedenteComponent', () => {
  let component: AgregareditartipoantecedenteComponent;
  let fixture: ComponentFixture<AgregareditartipoantecedenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregareditartipoantecedenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregareditartipoantecedenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
