/// <reference types="@types/google.maps" />

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
}
