import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MapComponent} from "../modules/map/map.component";
import {MapModule} from "../modules/map/map.module";
import {provideMockStore} from "@ngrx/store/testing";
import {StoreModule} from "@ngrx/store";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MapComponent,
      ],
      providers:[
        provideMockStore({}),
      ],
      imports:[
        MapModule,
        StoreModule.forRoot({}, {}),
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
