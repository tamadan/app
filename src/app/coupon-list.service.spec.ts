import { TestBed, inject } from '@angular/core/testing';

import { CouponListService } from './coupon-list.service';

describe('CouponListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouponListService]
    });
  });

  it('should be created', inject([CouponListService], (service: CouponListService) => {
    expect(service).toBeTruthy();
  }));
});
