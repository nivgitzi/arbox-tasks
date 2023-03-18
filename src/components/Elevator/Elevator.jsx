import "./Elevator.css"
import {ReactComponent as ElevatorIcon} from "../../icons/elevator.svg" 
import { floorStatus } from "../../consts/floors"
import { statusClassNames } from "../../consts/classNames"

const Elevator = (status = floorStatus.call) => {
    return (<ElevatorIcon className={`elevator ${statusClassNames[status]}`}/>)
}

export default Elevator