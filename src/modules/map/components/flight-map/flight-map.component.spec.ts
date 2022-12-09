import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightMapComponent } from './flight-map.component';
import {provideMockStore} from "@ngrx/store/testing";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";

describe('FlightMapComponent', () => {
  let component: FlightMapComponent;
  let fixture: ComponentFixture<FlightMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightMapComponent ],
      imports:[
        HttpClientModule,
        StoreModule.forRoot({}, {}),
      ],
      providers:[
        provideMockStore({}),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
