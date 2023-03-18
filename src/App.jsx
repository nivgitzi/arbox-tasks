import "./App.css";
import Board from "./components/Board/Board";

const App = () => {
  return (
    <div className="App">
      <h3>Elevator Exercise</h3>
      <Board floorsAmount={10} elevatorsAmount={5} />
    </div>
  );
};

export default App;
