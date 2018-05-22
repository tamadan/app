import { Component } from '@angular/core';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private location: Location){
  }
  pop(){
    this.location.back();
  }
  rootPage = CouponListComponent;
}
