import { Component, OnInit } from '@angular/core';
import { Params, OnsNavigator} from 'ngx-onsenui';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

@Component({
  selector: 'app-coupon-action',
  templateUrl: './coupon-action.component.html',
  styleUrls: ['./coupon-action.component.scss']
})
export class CouponActionComponent implements OnInit {

  constructor(private navi: OnsNavigator, private _params: Params) {
    console.log('parameters:', _params.data);
  }

  ngOnInit() {
  }
  pop() {
    this.navi.element.pop();
  }

}
