import { Component } from '@angular/core';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { Location } from '@angular/common';
const EventSource: any = window['EventSource'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private location: Location) {
  }
  pop() {
    this.location.back();
  }
  clickMenu() {
    console.log('メニューが押された');
  }
  clickSerch() {
    console.log('検索ボタンが押された');
  }
}
