import { TestBed } from '@angular/core/testing';

import { TiposImagenService } from './tipos-imagen.service';

describe('TiposImagenService', () => {
  let service: TiposImagenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposImagenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
