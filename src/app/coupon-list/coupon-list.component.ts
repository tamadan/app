import { Component, OnInit, Injectable, ElementRef } from '@angular/core';
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
  title = '';
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  private inMove = false;
	private xDef = [0, 0, 0, 0, 0];
	private yDef = [0, 0, 0, 0, 0];
	private xStart = 0;
	private yStart = 0;
	private defHeight = window.screen.height;
	private defWidth = window.screen.width;
	private xPrevious = 0;

  constructor(
    private el: ElementRef,
    private http: HttpClient,
    private service: CouponListService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.search();
  }
  showDetail() {
    console.log('test');
  }

  search() {
    this.state = 'isLoading';
    // FIXME 一旦1にしてるけど、これは変えないとな〜
    // load filter options from localStorage
    this.service.getCouponList("1").subscribe(response => {
      let list = [];
      list = response['warif'];
      console.log(list[0]);
      this.values = list;
      this.values = list;
			this.title = list[0]['warif_name'];
    });

  }
  filterClick() {
    this.search();
  }
  cellClick(id) {
    // this._router.navigate(['/info', id]);
    this._router.navigate(['/warif']);

  }
  //  // action triggered when user swipes
  // swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
  //   // out of range
  //   console.log(currentIndex  + action);
  // }
  doFab() {
		alert('あ');
	}
}
