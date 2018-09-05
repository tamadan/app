import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WarifApiService} from '../warif-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { WarifStorageService} from '../warif-storage.service';
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
  constructor(private http: HttpClient, private service: WarifApiService, private _router: Router) { }

  ngOnInit() {
    this.search();
  }
  showDetail() {
    console.log('test');
  }

  search() {
    this.state = 'isLoading';
    // load filter options from localStorage
    this.service.getCouponList('1')
    .subscribe(response => {
      let list = [];
      list = response['warif'];
      console.log(response);
      this.values = list;
      // 試験的に画像差し替え
      this.values.forEach(value => {
        value.warif_image_url
         = 'https://assets.media-platform.com/gizmodo/dist/images/2018/08/09/786EF9BB-8642-4DC2-AB5E-0D63F74CD85E-w960.JPG';
      });
    });

  }

  searchCategory() {
  }
  searchMap() {
    this._router.navigate(['/map']);
  }
  searchWord() {

  }

  cellClick(id) {
    this._router.navigate(['/info', id]);
  }
   // action triggered when user swipes
   swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    // out of range
    console.log(currentIndex + ' ' + action);
  }
}
