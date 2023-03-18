import "./Floor.css"
import Tile from "../Tile/Tile"
import FloorButton from "../FloorButton/FloorButton"
import { useState } from "react"
import {floorStatus} from "../../consts/floors"
import Elevator from "../Elevator/Elevator"


const Floor = ({elevatorFloors, floorIndex}) => {
    const [status] = useState(floorStatus.call)

    const getFloorTitle = (floorIndex) => {
        switch (floorIndex) {
            case 0:
                return "Ground Floor"
            case 1:
                return "1st"
            case 2:
                return "2nd"
            case 3: 
                return "3rd"
            default:
                return `${floorIndex}th`
        }
    }

    const tiles = [];

    for(let index = 0; index < elevatorFloors.length; index++) {
        tiles.push(<Tile key={index}>{ elevatorFloors[index] === floorIndex && <Elevator />}</Tile>)
    }

    return (
    <tr className="floor">
        <th className="floor-title">{getFloorTitle(floorIndex)}</th>
        <>{tiles}</>
        <td className="floor-btn"><FloorButton status={status}/></td>
    </tr>
    )
}

export default Floor