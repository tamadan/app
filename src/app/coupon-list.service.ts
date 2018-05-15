import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class CouponListService {
  url = 'https://tonal-loader-200405.appspot.com/api/1/stores';
  constructor(private http: HttpClient) { }

  getCouponList() {
    this.http.get<string>(this.url).subscribe(data => {
      console.log(data);
    });
  }

}
