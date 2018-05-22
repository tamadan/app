import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CouponActionComponent} from '../coupon-action/coupon-action.component';
import { CouponListService} from '../coupon-list.service';
import { Page1Component} from '../page1/page1.component';

@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.scss']
})
export class StoreInfoComponent implements OnInit {

  storeInfo: any[];
  warifList: any[];
  storeName: string;
  storeId: string;
  storeImage = [];
  address: string;
  storeDiscription: string;
  storeLink: string;
  storeTel: string;
  storeMail: string;

  constructor(private http: HttpClient, private service: CouponListService, private route: ActivatedRoute) {      
  }

  ngOnInit() {
    this.route.paramMap.subscribe((_params: ParamMap) => {
      this.storeName = _params.get('store_name');
      this.storeImage.push(_params.get('store_image1'));
      this.address = _params.get('address');
      this.storeId = _params.get('store_id');
      this.service.getStoreInfo(this.storeId)
      .subscribe(response => {
        this.storeInfo = response['store'];
        this.storeDiscription = this.storeInfo['store_description'];
        this.storeLink = this.storeInfo['store_hp_link'];
        this.storeTel = this.storeInfo['store_tell_number1'];
        this.storeMail = this.storeInfo['store_mail_address1'];
        this.storeImage.push(this.storeInfo['store_image1']);
        this.storeImage.push(this.storeInfo['store_image2']);
        this.storeImage.push(this.storeInfo['store_image3']);
        this.storeImage.push(this.storeInfo['store_image4']);
        this.storeImage.push(this.storeInfo['store_image5']);
      });
      this.service.getCouponList(this.storeId)
      .subscribe(response => {
        let list = [];
        list = response['warif'];
        console.log(response);
        this.warifList = list;
    });
    this.service.ActionCoupon().subscribe(response => {
      console.log(response);
    });
  }); 
  }
  cellClick(warif) {
    console.log();
    // this.navi.element.pushPage(CouponActionComponent, {data: warif});

  }
}
