import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {addFlight, editFlight} from "../../../../common/store/flight/flight.action";

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {

  constructor(
    // private flightService: FlightService,
    private store: Store
  ) {
  }

  @Input()
  flightId: string | undefined

  @Input()
  flightCoordinates: google.maps.LatLngLiteral[] = [];

  @Output()
  deleteFlightCoordinates = new EventEmitter();

  ngOnInit() {

  }

  deleteCoordinate(id: number): void {
    this.flightCoordinates = [...this.flightCoordinates.slice(0, id), ...this.flightCoordinates.slice(id + 1)]
    this.deleteFlightCoordinates.emit(this.flightCoordinates)
  }


  saveFlight() {
    if (this.flightId) {
      this.store.dispatch(editFlight({_id: this.flightId, flights: this.flightCoordinates}))
      this.flightCoordinates = []
      this.flightId = ''
      this.deleteFlightCoordinates.emit([])
    } else {
      this.store.dispatch(addFlight({_id: Date.now().toString(), flights: this.flightCoordinates}))
      this.flightCoordinates = []
      this.deleteFlightCoordinates.emit([])
    }
  }

}
