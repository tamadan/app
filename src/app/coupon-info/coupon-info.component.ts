import { Component, OnInit } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ActivatedRoute, Params, ParamMap ,Router} from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WarifApiService } from '../warif-api.service';
import { WarifStorageService } from '../warif-storage.service';

@Component({
  selector: 'app-coupon-info',
  templateUrl: './coupon-info.component.html',
  styleUrls: ['./coupon-info.component.scss']
})
export class CouponInfoComponent implements OnInit {
  storeInfo: any[];
  warifInfo: ParamMap;
  storeName: string;
  warifId: string;
  storeId: string;
  storeImage = [];
  address: string;
  storeDiscription: string;
  storeLink: string;
  storeTel: string;
  storeMail: string;
  sampleImage: string;

  constructor(private http: HttpClient, private service: WarifApiService, private route: ActivatedRoute, private _localStrage: WarifStorageService, private _router: Router) {      
  }

  ngOnInit() {
    
    this.route.paramMap.subscribe((_params: ParamMap) => {
      this.warifInfo = _params;
      this.sampleImage = this.warifInfo.get('warif_image_url');
      this.storeName = this.warifInfo.get('warif_name');
      console.log(this.warifInfo);
      this.storeImage.push(this.warifInfo.get('warif_image_url'));
      this.storeId = this.warifInfo.get('store_id');
      this.warifId = this.warifInfo.get('warif_id');
      this.service.getStoreInfo(this.storeId)
      .subscribe(response => {
        console.log(response);
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
      console.log(_params);
    }); 
  }
  onClickUse() {
    console.log("割る");
    this._router.navigate(['/action',{warifId:this.warifId}]);
    
  }
}
