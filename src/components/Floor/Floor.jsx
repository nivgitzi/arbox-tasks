import "./Floor.css";
import Tile from "../Tile/Tile";
import FloorButton from "../FloorButton/FloorButton";
import { createRef, useEffect, useRef, useState } from "react";
import { floorStatus } from "../../consts/floors";
import Elevator from "../Elevator/Elevator";
import { ReactComponent as ElevatorIcon } from "../../icons/elevator.svg";
import { statusClassNames } from "../../consts/classNames";

const Floor = ({
  elevatorFloors,
  floorIndex,
  onCall,
  moveElevator,
  children,
}) => {
  const tilesRef = useRef([]);
  const [status, setStatus] = useState(floorStatus.call);

  const getFloorTitle = (floorIndex) => {
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
  };

  const tiles = [];

  for (let index = 0; index < elevatorFloors.length; index++) {
    console.log(status);
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

  const handleElevatorCall = () => {
    const [closestElevatorIndex, closestDiff] = onCall(floorIndex);
    const offsetTop = tilesRef.current[closestElevatorIndex].offsetTop;
    const transitionDurationS = moveElevator(
      closestElevatorIndex,
      offsetTop,
      closestDiff,
      floorIndex
    );

    // setStatus(floorStatus.waiting);

    // setTimeout(() => {
    //   setStatus(floorStatus.arrived);

    //   setTimeout(() => {
    //     setStatus(floorStatus.call);
    //   }, 2000);
    // }, transitionDurationS * 1000);
  };

  return (
    <>
      <tr className="floor">
        <th className="floor-title">{getFloorTitle(floorIndex)}</th>
        <>{tiles}</>
        <td className="floor-btn">
          <FloorButton status={status} onClick={handleElevatorCall} />
        </td>
      </tr>
    </>
  );
};

export default Floor;
