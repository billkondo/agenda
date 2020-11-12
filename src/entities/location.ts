import assert from 'assert';

export class Location {
  lat: number;
  lng: number;

  constructor(lat: number, lng: number) {
    assert(lat != null);
    assert(lng != null);

    this.lat = parseFloat(lat.toFixed(6));
    this.lng = parseFloat(lng.toFixed(6));
  }
}
