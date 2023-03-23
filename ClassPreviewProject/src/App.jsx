import { useState } from "react";
import dashboardImg from "./images/dashboard.png";
import "./App.css";
import { Drawer } from "./components/Drawer/Drawer";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <div className="App">
      <img className="dashboard" src={dashboardImg} onClick={handleClick}></img>
      <Drawer open={isDrawerOpen} setIsOpen={setIsDrawerOpen}></Drawer>
    </div>
  );
};

export default App;
