import {Component} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as ons from 'onsenui';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { CouponActionComponent} from './coupon-action/coupon-action.component';
import { Location } from '@angular/common';
import { WarifStorageService } from './warif-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _router: Router, private _location: Location, private history_service: WarifStorageService) { }

  back() {
    console.log('back');
    this._location.back();
  }
  filterClick() {
    this.history_service.clear();
  }
}
