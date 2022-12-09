import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapModule } from "../modules/map/map.module";
import {flightReducer} from "../common/store/flight/flight.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({}, {}),
        BrowserAnimationsModule,
        MapModule,
        StoreModule.forRoot({flightEntries:flightReducer})
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

