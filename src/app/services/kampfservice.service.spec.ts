import { TestBed } from '@angular/core/testing';

import { KampfserviceService } from './kampfservice.service';

describe('KampfserviceService', () => {
  let service: KampfserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KampfserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
