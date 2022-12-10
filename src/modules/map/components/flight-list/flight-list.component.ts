import {Component, EventEmitter, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Flight} from "../../../../common/interfaces/flight.interface";
import {Store} from "@ngrx/store";
import {selectAllFlights} from "../../../../common/store/flight/flight.selector";
import {removeFlight} from "../../../../common/store/flight/flight.action";

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent {

  @Output()
  editFlightCoordinates = new EventEmitter();

  // readonly flights$ = this.flightService.flights$;
  readonly flights$ :Observable<Flight[]>
  constructor(
   // private flightService:FlightService,
   private store:Store
  ) {
    /**
     * Getting all the flights array from the ngrx store
     * */
    this.flights$ = store.select(selectAllFlights)
  }

  removeFlight(flight: Flight){
    this.store.dispatch(removeFlight(flight))
  }

}
