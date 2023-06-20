import { TestBed } from '@angular/core/testing';

import { PercentualObesosPorSexoService } from './percentual-obesos-por-sexo.service';

describe('PercentualObesosPorSexoService', () => {
  let service: PercentualObesosPorSexoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PercentualObesosPorSexoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
