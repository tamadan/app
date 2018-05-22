import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*画面遷移先を追加する場合は以下にimport追記*/

import { AppComponent } from './app.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { StoreInfoComponent } from './store-info/store-info.component';
import { CouponActionComponent} from './coupon-action/coupon-action.component';

/*画面遷移先を追加する場合は以下に遷移時のパスと起動モジュールを定義*/
const routes: Routes = [
    // パスの指定がない場合はAppNextComponentが起動
    { path: '', component: CouponListComponent },
    // パスにnextが指定されるとAppNextComponentが起動
    { path: 'info', component: StoreInfoComponent },
    // パスにnextnextが指定されるとAppNextNextComponentが起動
    { path: 'action', component: CouponActionComponent }
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
