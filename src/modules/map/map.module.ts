import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';
import {GoogleMapsModule} from "@angular/google-maps";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {FlightFormComponent} from './components/flight-form/flight-form.component';
import {FlightMapComponent} from './components/flight-map/flight-map.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {FlightListComponent} from './components/flight-list/flight-list.component';
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    MapComponent,
    FlightFormComponent,
    FlightMapComponent,
    FlightListComponent
  ],
  exports: [
    MapComponent,
    FlightListComponent,
    FlightFormComponent,
    FlightMapComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatExpansionModule,
  ],
})
export class MapModule {
}
