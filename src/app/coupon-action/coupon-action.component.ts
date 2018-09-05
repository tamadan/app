import { Component, OnInit } from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';
import { ActivatedRoute, Params, ParamMap, Router } from '@angular/router';
import { WarifStorageService } from '../warif-storage.service';

@Component({
  selector: 'app-coupon-action',
  templateUrl: './coupon-action.component.html',
  styleUrls: ['./coupon-action.component.scss']
})
export class CouponActionComponent implements OnInit {
  password: string;
  warifId: number;
  pass = '1111';

  constructor(private warif_History: WarifStorageService, private activeRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((_params: ParamMap) => {
      console.log(_params);
      this.warifId = Number(_params.get('warifId'));
    });
  }

  onClickWarif() {
    console.log('change');
  }

  modalOpen() {
    // ------------------------------------------------------------
    //  モーダルウインドウ オープン
    // ------------------------------------------------------------
     document.getElementById('modalArea').className = 'modalBg modalBgOpen';
   }
   modalClose() {
    // ------------------------------------------------------------
    //  モーダルウインドウ クローズ
    // ------------------------------------------------------------
     document.getElementById('modalArea').className = 'modalBg modalBgClose';
   }

   thanksModalClose() {
    document.getElementById('thanksModalArea').className = 'thanksModalBg thanksModalBgClose';
    this._router.navigate(['/']);
   }

   inputPassword() {
    if (this.pass = this.password) {
      console.log('認証' + this.warifId);
      this.warif_History.add({
        couponId : this.warifId,
        usedTime : new Date
      });
      this.modalClose();
      document.getElementById('thanksModalArea').className = 'thanksModalBg thanksModalBgOpen';
    } else {

    }
    console.log(this.password);
   }
}

