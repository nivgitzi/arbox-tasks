import { statusClassNames } from "../../consts/classNames";
import { buttonTitles } from "../../consts/floorButtons";
import "./FloorButton.css";

const FloorButton = ({ status, onClick }) => {
  return (
    <button className={statusClassNames[status]} onClick={onClick}>
      {buttonTitles[status]}
    </button>
  );
};

export default FloorButton;
