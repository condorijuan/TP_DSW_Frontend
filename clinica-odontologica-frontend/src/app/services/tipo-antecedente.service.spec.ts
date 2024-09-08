import { TestBed } from '@angular/core/testing';

import { TipoAntecedenteService } from './tipo-antecedente.service';

describe('TipoAntecedenteService', () => {
  let service: TipoAntecedenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoAntecedenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
