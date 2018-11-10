import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponMapComponent } from './coupon-map.component';

describe('CouponMapComponent', () => {
  let component: CouponMapComponent;
  let fixture: ComponentFixture<CouponMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
