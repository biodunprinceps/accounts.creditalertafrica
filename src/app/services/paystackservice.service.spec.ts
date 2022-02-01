import { TestBed } from '@angular/core/testing';

import { PaystackserviceService } from './paystackservice.service';

describe('PaystackserviceService', () => {
  let service: PaystackserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaystackserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
