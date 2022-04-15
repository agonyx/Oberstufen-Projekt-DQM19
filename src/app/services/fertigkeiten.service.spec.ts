import { TestBed } from '@angular/core/testing';

import { FertigkeitenService } from './fertigkeiten.service';

describe('FertigkeitenService', () => {
  let service: FertigkeitenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FertigkeitenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
