/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";

// Instructions to every other class on how they can be argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divSelector: string) {
    const $mapElement = document.querySelector(divSelector) as HTMLElement;
    this.googleMap = new google.maps.Map($mapElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const { lat, lng } = mappable.location;
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
