import { statusClassNames } from "../../consts/classNames";
import { buttonTitles } from "../../consts/floorButtons";
import { floorStatus } from "../../consts/floors";
import "./FloorButton.css";

const FloorButton = ({ status = floorStatus.call, onClick }) => {
  return (
    <button className={statusClassNames[status]} onClick={onClick}>
      {buttonTitles[status]}
    </button>
  );
};

export default FloorButton;
