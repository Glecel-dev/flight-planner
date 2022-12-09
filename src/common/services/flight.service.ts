import {Injectable} from "@angular/core";
import {BehaviorSubject, finalize, Observable, tap, timer} from "rxjs";
import {Flight} from "../interfaces/flight.interface";
import {FlightHttpService} from "./flight-http.service";

/**
 *
 * */
@Injectable
({providedIn: 'root'})

export class FlightService {
  constructor(
    private flightHttp :FlightHttpService,
  ) {
  }

  private readonly loading$$ = new BehaviorSubject<boolean>(false);
  private readonly flights$$ = new BehaviorSubject<Flight[]>([]);

  readonly flights$: Observable<Flight[]> = this.flights$$;
  readonly loading$: Observable<boolean> = this.loading$$;


  getAll(){
    this.loading$$.next(true);
    return timer(750).pipe(
      tap(()=>this.flights$$.next(this.flightHttp.getAllMocksFromLocalStorage())),
      finalize(()=>this.loading$$.next(false))
    )
  }
  addFlight(newFlight: Flight) {
    this.loading$$.next(true);
    return timer(750).pipe(
      tap(() => this._addFlight(newFlight)),
      finalize(() => this.loading$$.next(false)),
    );
  }

  private _addFlight(flight: Flight) {
    const flights = this.flights$$.getValue();
    this.flights$$.next([flight, ...flights]);
    localStorage.setItem('flights', JSON.stringify(this.flights$$.getValue()))
  }
  private _updateFlight(id: string, flight: Flight) {
    const flights = this.flights$$.getValue();
    this.flights$$.next([...flights.filter((flight) => flight._id !== id), flight]);
  }
}

