import { Component, OnInit } from '@angular/core';
import { WarifStorageService } from '../warif-storage.service';
import { WarifApiService } from '../warif-api.service';

@Component ({
  selector: 'app-coupon-history',
  templateUrl: './coupon-history.component.html',
  styleUrls: ['./coupon-history.component.scss']
})
export class CouponHistoryComponent implements OnInit {
  historyList: any[] = new Array;
  values: any[];
  constructor(private warif_history: WarifStorageService, private couponService: WarifApiService) { }

  ngOnInit() {
    this.warif_history.fetch().forEach(history => {
       this.historyList.push(history.couponId);
    });
    console.log(this.historyList);
    this.couponService.getCouponList('1')
    .subscribe(response => {
      let list = [];
      list = response['warif'];
      console.log(response);
      this.values = list;
      // 試験的に画像差し替え
      this.values.forEach(value => {
        value.warif_image_url =
        'https://assets.media-platform.com/gizmodo/dist/images/2018/08/09/786EF9BB-8642-4DC2-AB5E-0D63F74CD85E-w960.JPG';
      });
    });

    this.couponService.getCouponListByIds(this.historyList).subscribe(response => {
    });


  }

}
