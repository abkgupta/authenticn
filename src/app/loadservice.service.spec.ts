import { TestBed } from '@angular/core/testing';

import { LoadserviceService } from './loadservice.service';

describe('LoadserviceService', () => {
  let service: LoadserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
