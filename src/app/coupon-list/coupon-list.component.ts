import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OnsNavigator} from 'ngx-onsenui';
import { StoreInfoComponent} from '../store-info/store-info.component';
import { CouponListService} from '../coupon-list.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss']
})
export class CouponListComponent implements OnInit {
  state = '';
  getUrl = 'https://api.foursquare.com/v2/venues/explore/';
  searchString: string;
  values: any[];
  constructor(private http: HttpClient, private navi: OnsNavigator, private service: CouponListService) { }

  ngOnInit() {
    this.search();
    this.service.getCouponList();
  }
  showDetail() {
    console.log('test');
  }

  search() {
    this.state = 'isLoading';
    // load filter options from localStorage
    this.http.get('../../assets/json/stores.json')
    .subscribe(response => {
      let list = [];
      list = response['store'];
      console.log(list[0]);
      this.values = list;
    });

  }
  filterClick() {
    this.search();
  }
  cellClick(id) {
    this.navi.element.pushPage(StoreInfoComponent, {data: id});
  }
}
