import { TestBed } from '@angular/core/testing';

import { DoadoresPorEstadoService } from './doadores-por-estado.service';

describe('DoadoresPorEstadoService', () => {
  let service: DoadoresPorEstadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoadoresPorEstadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
