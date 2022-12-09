import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Flight} from "../../interfaces/flight.interface";


export const selectAllFlights = createSelector(
  createFeatureSelector('flightEntries'),
  (state:Flight[])=>{
    return state
  })
export const selectFlight = createSelector(
  createFeatureSelector('flightEntries'),
  (state:Flight[])=>{
    return state
  }
)
