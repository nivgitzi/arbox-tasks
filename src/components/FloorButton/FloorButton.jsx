import { statusClassNames } from "../../consts/classNames"
import { buttonTitles } from "../../consts/floorButtons"
import "./FloorButton.css"

const FloorButton = ({status}) => {
    return (<button className={statusClassNames[status]}>{buttonTitles[status]}</button>)
}

export default FloorButton