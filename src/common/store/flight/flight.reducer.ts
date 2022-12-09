import {createReducer, on} from "@ngrx/store";
import {Flight} from "../../interfaces/flight.interface";
import {addFlight, editFlight, removeFlight} from "./flight.action";

export const initialFlightEntries: Flight[] = []
export const flightReducer = createReducer(
  initialFlightEntries,

  on(addFlight, (entries, flight) => {
    const entriesClone: Flight[] = [...entries]
    entriesClone.push(flight)
    return entriesClone
  }),
  on(editFlight, (entries, flight) => {
    console.log(flight)
    const entriesClone: Flight[] = [...entries]
    const index = entriesClone.findIndex(item=>item._id === flight._id)
    entriesClone.splice(index, 1, flight);
    console.log(entriesClone)
    return entriesClone
  }),

  on(removeFlight, (entries, flight) => {
    const entriesClone: Flight[] = [...entries]
    entriesClone.splice(entriesClone.indexOf(flight), 1)
    return entriesClone
  }),
)
