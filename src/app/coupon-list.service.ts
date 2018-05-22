import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Warif} from './model/warif';

@Injectable()
export class CouponListService {
  url = 'https://tonal-loader-200405.appspot.com/api/1/';
  data = {
    'warif': {
      'warif_id': 1,
      'store_id': 1,
      'user_id': 1,
      'introduction_user_id': 1
    }
  };

  ActionCoupon(): any {
    return this.http.post(this.url + 'warif', this.data);
  }

  constructor(private http: HttpClient) { }

  getStoreList(): any {
    return this.http.get<string>(this.url + 'stores');
  }
  getStoreInfo(storeId: string): any {
    return this.http.get<string>(this.url + 'store/' + storeId);
  }
  getCouponList(StoreId: string): any {
    return this.http.get<string>(this.url + 'warif/' + StoreId + '/store');
  }


}
