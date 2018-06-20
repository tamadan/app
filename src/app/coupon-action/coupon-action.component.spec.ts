import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponActionComponent } from './coupon-action.component';

describe('CouponActionComponent', () => {
  let component: CouponActionComponent;
  let fixture: ComponentFixture<CouponActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
