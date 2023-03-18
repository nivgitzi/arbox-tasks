import { floorStatus } from "./floors"

export const statusClassNames = {
    [floorStatus.call]: "call",
    [floorStatus.waiting]: "waiting",
    [floorStatus.arrived]: "arrived"
}