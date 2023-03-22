import "./Floor.css";
import FloorButton from "../FloorButton/FloorButton";
import { createElement, useEffect, useMemo, useRef, useState } from "react";
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
          <span className="time"></span>
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

      const duration = transitionDurationS * 1000;
      const start = performance.now();

      const interval = setInterval(() => {
        const milis = Math.ceil(
          (duration - (performance.now() - start)) / 1000
        );
        const minutes = Math.floor(milis / 60);
        const seconds = Math.ceil(milis % 60);

        if (milis > 0) {
          tilesRef.current[
            closestElevatorIndex
          ].children[0].innerText = `${minutes} min, ${seconds} sec`;
        }
      }, 1);

      setTimeout(() => {
        setStatus(floorStatus.arrived);
        clearInterval(interval);
        tilesRef.current[closestElevatorIndex].children[0].innerText = "";
        setTimeout(() => {
          setStatus(floorStatus.call);
        }, 2000);
      }, duration);
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
