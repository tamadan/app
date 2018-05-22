import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { StoreInfoComponent } from './store-info/store-info.component';
import { CouponActionComponent } from './coupon-action/coupon-action.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CouponListService} from './coupon-list.service';

const appRoutes: Routes = [
  { path: 'list', component: CouponListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'info', component: StoreInfoComponent },
  { path: 'warif', component: CouponActionComponent }
];
export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [AppComponent, Page1Component, CouponListComponent, StoreInfoComponent, CouponActionComponent],
  entryComponents: [CouponListComponent, StoreInfoComponent, CouponActionComponent, Page1Component],
  imports: [BrowserModule, OnsenModule, HttpClientModule, FormsModule,routing],
  providers: [CouponListService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
