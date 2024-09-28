import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregareditartipoimagenComponent } from './agregareditartipoimagen.component';

describe('AgregareditartipoimagenComponent', () => {
  let component: AgregareditartipoimagenComponent;
  let fixture: ComponentFixture<AgregareditartipoimagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregareditartipoimagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregareditartipoimagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
