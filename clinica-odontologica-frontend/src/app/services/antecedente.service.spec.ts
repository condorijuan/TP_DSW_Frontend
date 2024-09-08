import { TestBed } from '@angular/core/testing';

import { AntecedenteService } from './antecedente.service';

describe('AntecedenteService', () => {
  let service: AntecedenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntecedenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
