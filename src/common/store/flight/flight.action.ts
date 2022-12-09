import {createAction, props} from "@ngrx/store";
import {Flight} from "../../interfaces/flight.interface";

export const addFlight = createAction('[Flight Map] Add Flight' , props<Flight>())
export const editFlight = createAction('[Flight Map] Edit Flight' , props<Flight>())
export const removeFlight = createAction('[Flight Map] Remove Flight', props<Flight>())
