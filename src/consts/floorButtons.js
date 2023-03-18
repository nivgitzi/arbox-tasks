import { floorStatus } from "./floors"

export const buttonTitles = {
    [floorStatus.call]: "Call",
    [floorStatus.waiting]: "Waiting",
    [floorStatus.arrived]: "Arrived"
}