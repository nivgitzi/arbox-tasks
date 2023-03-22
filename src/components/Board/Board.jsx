import { useMemo, useRef, useState } from "react";
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

  const [elevatorsStatus, setElevatorsStatus] = useState(
    Array(elevatorsAmount).fill(floorStatus.call)
  );

  const elevatorsRef = useRef([]);

  // TODO: Now no use in Elevator & Tile

  const elevators = useMemo(() => {
    const boardElevators = [];
    for (let index = 0; index < elevatorFloors.length; index++) {
      boardElevators.push(
        <div
          className="elevator"
          key={index}
          ref={(el) => (elevatorsRef.current[index] = el)}
        >
          <ElevatorIcon className="elevator-icon" />
        </div>
      );
    }

    return boardElevators;
  }, [elevatorFloors]);

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

      setElevatorsStatus((prev) => {
        const curr = prev;
        curr[elevatorIndex] = floorStatus.arrived;
        return curr;
      });

      setTimeout(() => {
        currElevatorRef.className = `elevator ${
          statusClassNames[floorStatus.call]
        }`;

        setElevatorsStatus((prev) => {
          const curr = prev;
          curr[elevatorIndex] = floorStatus.call;
          return curr;
        });
      }, 2000);
    }, transitionDurationS * 1000);

    return transitionDurationS;
  };

  const handleElevatorCall = (floorIndex) => {
    const availableElevatorFloors = elevatorFloors.map(
      (elevatorFloor, index) => {
        const isElevatorAvailable = elevatorsStatus[index] === floorStatus.call;
        return isElevatorAvailable ? elevatorFloor : null;
      }
    );

    const [closetElevatorIndex, closestDiff] = findClosestValueIndex(
      availableElevatorFloors,
      floorIndex
    );

    setElevatorsStatus((prev) => {
      const curr = prev;
      curr[closetElevatorIndex] = floorStatus.waiting;
      return curr;
    });

    setElevatorFloors((prev) => {
      // Object.assign([], { ...prev, [closetElevatorIndex]: floorIndex });

      const curr = prev;
      curr[closetElevatorIndex] = floorIndex;
      return curr;
    });

    return [closetElevatorIndex, closestDiff];
  };

  const floors = useMemo(() => {
    const boardFloors = [];

    for (let index = floorsAmount - 1; index >= 0; index--) {
      boardFloors.push(
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

    return boardFloors;
  }, [elevatorFloors]);

  return (
    <table className="board">
      <tbody>{floors}</tbody>
    </table>
  );
};

export default Board;
