import { Component, OnInit } from '@angular/core';
import { Params, OnsNavigator} from 'ngx-onsenui';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CouponActionComponent} from '../coupon-action/coupon-action.component';
import { CouponListService} from '../coupon-list.service';

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

  constructor(private http: HttpClient, private navi: OnsNavigator, private _params: Params, private service: CouponListService) {
    console.log('parameters:', _params.data);
    this.storeName = _params.data['store_name'];
    this.storeImage.push(_params.data['store_image1']);
    this.address = _params.data['address'];
    this.storeId = _params.data['store_id'];
  }

  ngOnInit() {
    this.service.getStoreInfo(this.storeId)
    .subscribe(response => {
      let list = [];
      list = response['store'];
      console.log(list[0]);
      this.storeInfo = list;
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
      console.log(list[0]);
      this.warifList = list;
    });
  }
  cellClick(warif) {
    console.log();
    this.navi.element.pushPage(CouponActionComponent, {data: warif});

  }
  pop() {
    this.navi.element.popPage();
  }
}
