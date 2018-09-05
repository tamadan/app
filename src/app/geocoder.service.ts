import {
  Injectable,
  NgZone
} from '@angular/core';
import { AgmCoreModule,
  GoogleMapsAPIWrapper,
  MapsAPILoader
} from '@agm/core';
declare let google: any;

@Injectable()
export class GeocoderService extends GoogleMapsAPIWrapper {
  private geocoder: any = null;
  constructor(
    private __loader: MapsAPILoader,
    private __zone: NgZone
  ) {
    super(__loader, __zone);
  }
  getAddress(lat, lng) {
    this.__loader.load().then(() => {
      /**
       * google maps scriptsがloadしおわると、
       * この中でgoogle maps apiが使える
       * （new google.maps等）
       */
      this.geocoder = new google.maps.Geocoder();
      /** 以下に逆geocode処理を記述 */
      const latlng = new google.maps.LatLng(lat, lng);
      this.geocoder.geocode( { 'latLng': latlng }, function(results, status) {
        if (status === 'OK') {
          console.log(results);
          console.log(results[0]);
        } else {
         alert('Geocode was not successful for the following reason: ' + status);
          return false;
        }
     });
   });
  }
  public geocoding(address: string): Promise<any> {
    return this.__loader.load().then(() => {
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
}
