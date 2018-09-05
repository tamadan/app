import { BrowserModule } from '@angular/platform-browser';
import {
  Component,
  ViewChild,
  OnsTab,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from 'ngx-onsenui';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { CouponActionComponent } from './coupon-action/coupon-action.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { WarifApiService} from './warif-api.service';
import { WarifStorageService} from './warif-storage.service';
import { CouponInfoComponent } from './coupon-info/coupon-info.component';
import { CouponHistoryComponent } from './coupon-history/coupon-history.component';
import { CouponMapComponent } from './coupon-map/coupon-map.component';
import { WarifMapService } from './warif-map.service';
import { GeocoderService } from './geocoder.service';


const appRoutes: Routes = [
  { path: 'list', component: CouponListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'hist', component:  CouponHistoryComponent},
  { path: 'info', component: CouponInfoComponent },
  { path: 'action', component: CouponActionComponent },
  { path: 'map', component: CouponMapComponent}
];

@NgModule({
  declarations: [AppComponent, CouponListComponent, CouponInfoComponent, CouponActionComponent, CouponHistoryComponent, CouponMapComponent],
  entryComponents: [CouponListComponent, CouponInfoComponent, CouponHistoryComponent, CouponActionComponent, CouponMapComponent],
  imports: [BrowserModule, OnsenModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBi2rfATMxXGJyi3xpaCM4Y9ie7r1Y09gU'
    }),],
  providers: [WarifApiService, WarifStorageService, WarifMapService, GeocoderService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
