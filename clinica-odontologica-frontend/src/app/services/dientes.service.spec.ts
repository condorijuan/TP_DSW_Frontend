import { TestBed } from '@angular/core/testing';

import { DientesService } from './dientes.service';

describe('DientesService', () => {
  let service: DientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
