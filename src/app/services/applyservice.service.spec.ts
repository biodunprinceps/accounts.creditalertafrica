import { TestBed } from '@angular/core/testing';

import { ApplyserviceService } from './applyservice.service';

describe('ApplyserviceService', () => {
  let service: ApplyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
