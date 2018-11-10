import { Component, OnInit } from '@angular/core';
import { GeocoderService} from '../geocoder.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { WarifMapService } from '../warif-map.service';
import { map } from 'rxjs/operators';

interface marker {
  id: number;
  lat: number;
  lng: number;
  label?: string;
  image?: string;
  name?: string;
  icon?: string;
  draggable: boolean;
}

@Component ({
  selector: 'app-coupon-map',
  templateUrl: './coupon-map.component.html',
  styleUrls: ['./coupon-map.component.scss']
})
export class CouponMapComponent implements OnInit {
  mapList: marker[] = [];
  openedWindow = 0;
  lat = 35.6329007;
  lng = 139.8792003;
  zoom = 15;

  constructor(
    public mapService: WarifMapService,
  ) {}

  ngOnInit() {
    this.mapList.push({
      id: 1,
      lat: 35.6339007,
      lng: 139.8802003,
      label: 'B',
      image: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/42824/42824959.jpg?token=1de5771&api=v2',
      name: 'hogehogeクーポン',
      icon: '../assets/mapIcon/pin.png',
      draggable: true
    },
    {
      id: 2,
      lat: 35.630,
      lng: 139.875,
      label: 'A',
      image: 'https://setsuzoku.nifty.com/cms_image/setsuzoku/koneta/160722000094/467.jpg',
      icon: '../assets/mapIcon/mano.png',
      name: 'fugafugaクーポン',
      draggable: true
    },
    {
      id: 3,
      lat: 35.629,
      lng: 139.874,
      label: 'C',
      image: 'https://www.torokeru.jp/images/index_jisseki.jpg',
      name: 'hogefugaクーポン',
      draggable: true
    });
  }
  public geocoding(f: NgForm) {

    const self = this;
    this.mapService.geocoding(f.value.address).then(
      rtn => {
        const location = rtn[0].geometry.location;

        self.lat = location.lat();
        self.lng = location.lng();
      }
    );
  }
  public openWindow(id) {
    this.openedWindow = id; // alternative: push to array of numbers
  }
  public isInfoWindowOpen(id) {
    return this.openedWindow === id; // alternative: check if id is in array
}
  public getMyPlace() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
          },
          error => {
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
      );
  }
  }
  public goInfo(clickMarker: marker) {

  }
  public cellClick(clickMarker: marker) {
    this.lat = clickMarker.lat;
    this.lng = clickMarker.lng;
    this.openedWindow = clickMarker.id;
  }
}
