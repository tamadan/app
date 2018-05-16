import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class CouponListService {
  url = 'https://tonal-loader-200405.appspot.com/api/1/';
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
