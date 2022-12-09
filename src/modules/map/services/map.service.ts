import {HttpClient} from "@angular/common/http";
import {first, Observable, of, tap} from "rxjs";
import {environment} from "../../../environments/environment.dev";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsService {

  private actionInProgress = false;

  private initialised = false

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  ready(): Observable<boolean> {
    if (!this.initialised && !this.actionInProgress) {
      this.actionInProgress = true;
      return this.httpClient.jsonp<boolean>(
        `https://maps.googleapis.com/maps/api/js?key=${environment.googleMaps.apiKey}`,
        'callback',
      ).pipe(
        tap(() => {
          this.initialised = true;
          this.actionInProgress = false;
        }),
        first(),
      )
    }
    return of(this.initialised);
  }
}
