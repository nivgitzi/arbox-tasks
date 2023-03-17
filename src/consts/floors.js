const floorState = {
    free: 0,
    waiting: 1,
    arrived: 2
}

const callButtonTitles = {
    [floorState.free]: "Call",
    [floorState.waiting]: "Waiting",
    [floorState.arrived]: "Arrived"
}