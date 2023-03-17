import { floorStates } from "./floors"

export const buttonTitles = {
    [floorStates.call]: "Call",
    [floorStates.waiting]: "Waiting",
    [floorStates.arrived]: "Arrived"
}

export const buttonClassnames = {
    [floorStates.call]: "call-btn",
    [floorStates.waiting]: "waiting-btn",
    [floorStates.arrived]: "arrived-btn"
}