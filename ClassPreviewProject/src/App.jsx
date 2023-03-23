import { useState } from "react";
import DashboardImg from "./images/dashboard.png";
import "./App.css";
import { ClassDrawer } from "./components/ClassDrawer/ClassDrawer";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <div className="App">
      <img className="dashboard" src={DashboardImg} onClick={handleClick}></img>
      <ClassDrawer
        open={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
      ></ClassDrawer>
    </div>
  );
};

export default App;
