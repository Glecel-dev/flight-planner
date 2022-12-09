import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import {FlightMapComponent} from "./components/flight-map/flight-map.component";
import {FlightListComponent} from "./components/flight-list/flight-list.component";
import {FlightFormComponent} from "./components/flight-form/flight-form.component";
import {StoreModule} from "@ngrx/store";
import {provideMockStore} from "@ngrx/store/testing";

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapComponent, FlightMapComponent,FlightListComponent,FlightFormComponent ],
      imports:[
        StoreModule.forRoot({}, {}),

      ],
      providers:[
        provideMockStore({})
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
