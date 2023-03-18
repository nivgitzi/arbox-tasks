import { useState } from "react";
import Floor from "../Floor/Floor"
import "./Board.css"

const Board = ({floorsAmount, elevatorsAmount}) => {
    const [elevatorFloors] = useState(Array(elevatorsAmount).fill(0))

    const floors = [];

    for(let index = floorsAmount -1 ; index >= 0; index--) {
        floors.push(<Floor key={index} elevatorFloors={elevatorFloors} floorIndex={index}/>)
    }

    return (<table className="board"><tbody>{floors}</tbody></table>)
}

export default Board