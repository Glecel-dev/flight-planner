import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})

export class FlightHttpService {

  getAllMocksFromLocalStorage(){
    return JSON.parse(localStorage.getItem('flights')!)
  }

}
