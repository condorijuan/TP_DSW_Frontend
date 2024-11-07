import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregareditarimagenComponent } from './agregareditarimagen.component';

describe('AgregareditarimagenComponent', () => {
  let component: AgregareditarimagenComponent;
  let fixture: ComponentFixture<AgregareditarimagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregareditarimagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregareditarimagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
