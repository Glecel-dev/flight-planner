import {Component} from '@angular/core';
import {Flight} from "../../common/interfaces/flight.interface";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  flightCoordinates: google.maps.LatLngLiteral[] = []

  id?: string;
  /**
   * A Method for dealing with the communication of two component during the Updating method
   * */
  editFlight(flight: Flight): void {
    this.flightCoordinates = flight.flights
    this.id = flight._id
  }
}
