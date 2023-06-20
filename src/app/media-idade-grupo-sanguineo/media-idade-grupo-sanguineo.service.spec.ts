import { TestBed } from '@angular/core/testing';

import { MediaIdadeGrupoSanguineoService } from './media-idade-grupo-sanguineo.service';

describe('MediaIdadeGrupoSanguineoService', () => {
  let service: MediaIdadeGrupoSanguineoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaIdadeGrupoSanguineoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
