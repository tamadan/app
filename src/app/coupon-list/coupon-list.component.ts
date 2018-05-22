import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { StoreInfoComponent} from '../store-info/store-info.component';
import { CouponListService} from '../coupon-list.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  constructor(private http: HttpClient, private service: CouponListService, private _router: Router) { }

  ngOnInit() {
    this.search();
  }
  showDetail() {
    console.log('test');
  }

  search() {
    this.state = 'isLoading';
    // load filter options from localStorage
    this.service.getStoreList()
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
    this._router.navigate(['/info',id]);

  }
   // action triggered when user swipes
   swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    // out of range
    console.log(currentIndex + " "+action);
    
}
}
