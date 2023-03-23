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

  const [elevatorsCallQueue] = useState([]);
  const [isElevatorAvailable, setIsElevatorAvailable] = useState(true);

  const elevatorsRef = useRef([]);

  const elevatorsStatus = useMemo(() => {
    return Array(elevatorsAmount).fill(floorStatus.call);
  }, []);

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
    currElevatorRef.style.transitionDuration = `${transitionDurationS + 0.5}s`;

    currElevatorRef.className = `elevator ${
      statusClassNames[floorStatus.waiting]
    }`;

    setTimeout(() => {
      currElevatorRef.className = `elevator ${
        statusClassNames[floorStatus.arrived]
      }`;

      elevatorsStatus[elevatorIndex] = floorStatus.arrived;

      setTimeout(() => {
        currElevatorRef.className = `elevator ${
          statusClassNames[floorStatus.call]
        }`;

        elevatorsStatus[elevatorIndex] = floorStatus.call;
        setIsElevatorAvailable(true);
      }, 2000);
    }, transitionDurationS * 1000);

    return transitionDurationS;
  };

  const handleElevatorCall = async (floorIndex) => {
    const availableElevatorFloors = elevatorFloors.map(
      (elevatorFloor, index) => {
        const isAvailable = elevatorsStatus[index] === floorStatus.call;
        return isAvailable ? elevatorFloor : null;
      }
    );

    if (availableElevatorFloors.findIndex((floor) => floor !== null) === -1) {
      setIsElevatorAvailable((prev) => false);
      return [-1, -1];
    }

    const [closetElevatorIndex, closestDiff] = findClosestValueIndex(
      availableElevatorFloors,
      floorIndex
    );
    elevatorsStatus[closetElevatorIndex] = floorStatus.waiting;

    setElevatorFloors((prev) => {
      const curr = prev;
      curr[closetElevatorIndex] = floorIndex;
      return curr;
    });

    return [closetElevatorIndex, closestDiff];
  };

  const removeCallFromQueue = () => {
    elevatorsCallQueue.splice(0, 1);
  };

  const addCallToQueue = (floorIndex) => {
    elevatorsCallQueue.push(floorIndex);
  };

  const floors = useMemo(() => {
    const boardFloors = [];

    for (let index = floorsAmount - 1; index >= 0; index--) {
      boardFloors.push(
        <Floor
          key={index}
          elevatorFloors={elevatorFloors}
          isElevatorAvailable={isElevatorAvailable}
          elevatorsCallQueue={elevatorsCallQueue}
          removeCallFromQueue={removeCallFromQueue}
          addCallToQueue={addCallToQueue}
          moveElevator={moveElevator}
          onCall={handleElevatorCall}
          floorIndex={index}
        >
          {elevators}
        </Floor>
      );
    }

    return boardFloors;
  }, [elevatorFloors, isElevatorAvailable]);

  return (
    <table className="board">
      <tbody>{floors}</tbody>
    </table>
  );
};

export default Board;
