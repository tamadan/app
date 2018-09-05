import { Injectable } from '@angular/core';

import { MapsAPILoader } from '@agm/core';

declare let google: any;


@Injectable()
export class WarifMapService {
  private geocoder: any = null;

  constructor(
      private mapsAPILoader: MapsAPILoader,
  ) { }

  public geocoding(address: string): Promise<any> {
      return this.mapsAPILoader.load().then(() => {
          this.geocoder = new google.maps.Geocoder();

          return new Promise((resolve, reject) => {
              this.geocoder.geocode({ 'address': address }, (result: any, status: any) => {
                  if (status === google.maps.GeocoderStatus.OK) {
                      resolve(result);
                  } else {
                      reject(status);
                  }
              });
          });
      });
  }
  public getMyPlace(): Position {
    if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                return position;
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
                return null;
            }
        );
    }
    return null;
  }
}
