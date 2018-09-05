import { TestBed, inject } from '@angular/core/testing';

import { WarifApiService } from './warif-api.service';

describe('CouponListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WarifApiService]
    });
  });

  it('should be created', inject([WarifApiService], (service: WarifApiService) => {
    expect(service).toBeTruthy();
  }));
});
