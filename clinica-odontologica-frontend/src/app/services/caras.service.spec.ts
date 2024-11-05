import { TestBed } from '@angular/core/testing';

import { CarasService } from './caras.service';

describe('CarasService', () => {
  let service: CarasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
