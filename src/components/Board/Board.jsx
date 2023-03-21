import { useRef, useState } from "react";
import { findClosestValueIndex } from "../../utilities/arrays";
import Floor from "../Floor/Floor";
import "./Board.css";
import { ReactComponent as ElevatorIcon } from "../../icons/elevator.svg";
import { statusClassNames } from "../../consts/classNames";
import { floorStatus } from "../../consts/floors";

const Board = ({ floorsAmount, elevatorsAmount }) => {
  const [elevatorFloors, setElevatorFloors] = useState(
    Array(elevatorsAmount).fill(0)
  );
  const elevatorsRef = useRef([]);

  // TODO: fix buttons state change

  const floors = [];
  const elevators = [];

  for (let index = 0; index < elevatorFloors.length; index++) {
    elevators.push(
      <div
        className="elevator"
        key={index}
        ref={(el) => (elevatorsRef.current[index] = el)}
      >
        <ElevatorIcon className="elevator-icon" />
      </div>
    );
  }

  const handleElevatorCall = (floorIndex) => {
    const [closetElevatorIndex, closestDiff] = findClosestValueIndex(
      elevatorFloors,
      floorIndex
    );

    setElevatorFloors((prev) => {
      // Object.assign([], { ...prev, [closetElevatorIndex]: floorIndex });
      const curr = prev;
      curr[closetElevatorIndex] = floorIndex;
      return curr;
    });

    return [closetElevatorIndex, closestDiff];
  };

  const moveElevator = (elevatorIndex, offsetTop, closestDiff, floorIndex) => {
    let currElevatorRef = elevatorsRef.current[elevatorIndex];

    const newHeight = offsetTop - currElevatorRef.offsetParent.offsetTop;
    const transitionDurationS = closestDiff * 0.5;

    currElevatorRef.style.transform = `translateY(${newHeight}px)`;
    currElevatorRef.style.transitionDuration = `${transitionDurationS}s`;

    currElevatorRef.className = `elevator ${
      statusClassNames[floorStatus.waiting]
    }`;

    setTimeout(() => {
      currElevatorRef.className = `elevator ${
        statusClassNames[floorStatus.arrived]
      }`;

      setTimeout(() => {
        currElevatorRef.className = `elevator ${
          statusClassNames[floorStatus.call]
        }`;
      }, 2000);
    }, transitionDurationS * 1000);

    return transitionDurationS;
  };

  for (let index = floorsAmount - 1; index >= 0; index--) {
    floors.push(
      <Floor
        key={index}
        elevatorFloors={elevatorFloors}
        moveElevator={moveElevator}
        onCall={handleElevatorCall}
        floorIndex={index}
      >
        {elevators}
      </Floor>
    );
  }

  return (
    <table className="board">
      <tbody>{floors}</tbody>
    </table>
  );
};

export default Board;
