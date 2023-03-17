import { buttonClassnames, buttonTitles } from "../../consts/floorButtons"
import "./FloorButton.css"

const FloorButton = ({floorState}) => {
    console.log(floorState)
    return (<button className={buttonClassnames[floorState]}>{buttonTitles[floorState]}</button>)
}

export default FloorButton