import React, { useState } from "react";
import logo from "./CONWAYFACE.png";
import "./App.css";
import AnimationTest from "./components/AnimationTest";
import useWindowDimensions from "./hooks/getWindowDimensions";

function App() {
  const { height, width } = useWindowDimensions();
  // const [cells, setCells] = useState({});

  return (
    <div className="App">
      <div>
        <h1>Generation: X</h1>
        <AnimationTest width="3" height="3" size={34} />
      </div>
      <div className="presets"> z z z z</div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
