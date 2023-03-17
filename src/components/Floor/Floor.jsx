import "./Floor.css"
import Tile from "../Tile/Tile"
import FloorButton from "../FloorButton/FloorButton"
import { useState } from "react"
import {floorStates} from "../../consts/floors"


const Floor = ({elevatorsAmount, floorIndex}) => {
    const [floorState] = useState(floorStates.call)

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

    for(let index = 0; index < elevatorsAmount; index++) {
        tiles.push(<Tile key={index}>Tile</Tile>)
    }

    return (
    <tr className="floor">
        <th className="floor-title">{getFloorTitle(floorIndex)}</th>
        <>{tiles}</>
        <td className="floor-btn"><FloorButton floorState={floorState}/></td>
    </tr>
    )
}

export default Floor