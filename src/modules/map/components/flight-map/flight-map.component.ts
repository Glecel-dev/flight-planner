import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CLASSIC_MAP_STYLES} from "../../../../common/cons/googleMapClassic.styles";
import {GoogleMapsService} from "../../services/map.service";
import MapMouseEvent = google.maps.MapMouseEvent;
import IconMouseEvent = google.maps.IconMouseEvent;

@Component({
  selector: 'app-flight-map',
  templateUrl: './flight-map.component.html',
  styleUrls: ['./flight-map.component.scss']
})
export class FlightMapComponent {

  /**
   * Initial center position of the map
   */
  @Input() geo: google.maps.LatLngLiteral = {lat: 52.5200, lng: 13.4050};

  /**
   * google maps zoom level
   */
  @Input()
  zoom = 8;

  /**
   * Input needed for markers datasource
   * */
  @Input()
  markers: google.maps.LatLngLiteral[] = [];


  @Output()
  emitCoordinates = new EventEmitter();

  mapOptions = {
    styles: CLASSIC_MAP_STYLES,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    disableDefaultUI: false,
  };

  flightPath = {
    strokeColor: '#c40101',
    strokeOpacity: 1.0,
    strokeWeight: 5,
  }

  icon = {
    path: 'M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0',
    scale: 0.4,
    fillColor: "#c40101",
    fillOpacity: 1,
    strokeWeight: 0.4

  };

  apiLoaded = false;

  constructor(
    private googleMapsService: GoogleMapsService,
  ) {
    this.googleMapsService.ready().subscribe(() => {
      this.apiLoaded = true;
    })
  }

  onMapClick($event: MapMouseEvent | IconMouseEvent): void {
    const path: google.maps.LatLng | null = $event.latLng
    this.markers = [...this.markers, path?.toJSON()!]
    this.emitCoordinates.emit(this.markers)
  }

}
