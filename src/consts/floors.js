import elevatorSound from "../assets/elevator-ding-sound.mp3";

export const floorStatus = {
  call: 0,
  waiting: 1,
  arrived: 2,
};

export const floorArrivalSound = new Audio(elevatorSound);
