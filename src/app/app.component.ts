import { Component } from '@angular/core';
import { CouponListComponent } from './coupon-list/coupon-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rootPage = CouponListComponent;
}
