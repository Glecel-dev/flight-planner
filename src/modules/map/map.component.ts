import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {Flight} from "../../common/interfaces/flight.interface";

@Component({
  selector: 'core-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {

  flightCoordinates: google.maps.LatLngLiteral[] = []

  id?: string;

  editFlight(flight: Flight): void {
    this.flightCoordinates = flight.flights
    this.id = flight._id
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.id, this.flightCoordinates)
  }
}
