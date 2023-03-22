import "./Floor.css";
import FloorButton from "../FloorButton/FloorButton";
import { useEffect, useMemo, useRef, useState } from "react";
import { floorStatus } from "../../consts/floors";

const Floor = ({
  elevatorFloors,
  isElevatorAvailable,
  removeCallFromQueue,
  addCallToQueue,
  elevatorsCallQueue,
  floorIndex,
  onCall,
  moveElevator,
  children,
}) => {
  const tilesRef = useRef([]);
  const [status, setStatus] = useState(floorStatus.call);

  useEffect(() => {
    if (elevatorsCallQueue[0] === floorIndex && isElevatorAvailable) {
      removeCallFromQueue();
      handleElevatorCall();
    }
  }, [isElevatorAvailable]);

  const getFloorTitle = useMemo(() => {
    switch (floorIndex) {
      case 0:
        return "Ground Floor";
      case 1:
        return "1st";
      case 2:
        return "2nd";
      case 3:
        return "3rd";
      default:
        return `${floorIndex}th`;
    }
  }, [floorIndex]);

  const floorTiles = useMemo(() => {
    const tiles = [];
    for (let index = 0; index < elevatorFloors.length; index++) {
      tiles.push(
        <td
          className="tile"
          key={index}
          ref={(el) => (tilesRef.current[index] = el)}
        >
          {elevatorFloors[index] === floorIndex &&
            status === floorStatus.call &&
            children[index]}
        </td>
      );
    }

    return tiles;
  }, [elevatorFloors]);

  const handleElevatorCall = async () => {
    const [closestElevatorIndex, closestDiff] = await onCall(floorIndex);

    if (closestElevatorIndex !== -1) {
      const offsetTop = tilesRef.current[closestElevatorIndex].offsetTop;
      const transitionDurationS = moveElevator(
        closestElevatorIndex,
        offsetTop,
        closestDiff,
        floorIndex
      );

      setStatus(floorStatus.waiting);

      setTimeout(() => {
        setStatus(floorStatus.arrived);

        setTimeout(() => {
          setStatus(floorStatus.call);
        }, 5000);
      }, transitionDurationS * 1000);
    } else {
      addCallToQueue(floorIndex);
    }
  };

  return (
    <>
      <tr className="floor">
        <th className="floor-title">{getFloorTitle}</th>
        <>{floorTiles}</>
        <td className="floor-btn">
          <FloorButton status={status} onClick={handleElevatorCall} />
        </td>
      </tr>
    </>
  );
};

export default Floor;
