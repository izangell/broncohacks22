import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { ClientRequest } from 'http';

@Component({
  selector: 'app-search-place',
  templateUrl: './search-place.component.html',
  styleUrls: ['./search-place.component.css']
})
export class SearchPlaceComponent implements OnInit {

  // default to wmu, center of the universe
  center: google.maps.LatLngLiteral = {
    lat: 42.2826709,
    lng: -85.6146739
  }

  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 15,
    minZoom: 8,
  }

  //todo implement markers and change behavior
  _location: google.maps.LatLngLiteral = this.center;


  constructor() { }


  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    })
  }

  // addMarker() {
  //   this.markers.push({
  //     position: {
  //       lat: this.center.lat,
  //       lng: this.center.lng,
  //     },
  //     label: {
  //       color: 'red',
  //       text: 'Marker label ' + (this.markers.length + 1),
  //     },
  //     title: 'Marker title ' + (this.markers.length + 1),
  //     options: { animation: google.maps.Animation.BOUNCE },
  //   })
  // }

}
