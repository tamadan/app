import { Component, OnInit } from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';

@Component({
  selector: 'app-coupon-action',
  templateUrl: './coupon-action.component.html',
  styleUrls: ['./coupon-action.component.scss']
})
export class CouponActionComponent implements OnInit {

  constructor( private route: ActivatedRoute) {
    route.paramMap.subscribe((params: ParamMap) => {
      console.log(params)
    });
  }

  ngOnInit() {
  }
}
