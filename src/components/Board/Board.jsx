import Floor from "../Floor/Floor"
import "./Board.css"

const Board = ({floorsAmount, elevatorsAmount}) => {

    const floors = [];

    for(let index = floorsAmount -1 ; index >= 0; index--) {
        floors.push(<Floor key={index} elevatorsAmount={elevatorsAmount} floorIndex={index}/>)
    }

    return (<table className="board"><tbody>{floors}</tbody></table>)
}

export default Board