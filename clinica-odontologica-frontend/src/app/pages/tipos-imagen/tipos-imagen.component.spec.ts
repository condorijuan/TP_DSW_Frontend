import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposImagenComponent } from './tipos-imagen.component';

describe('TiposImagenComponent', () => {
  let component: TiposImagenComponent;
  let fixture: ComponentFixture<TiposImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiposImagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
