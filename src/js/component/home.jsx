import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  const addPurpleLight = () => {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]);
    }
  };

  return (
    <div id="trafficTop">
      <div id="container">
        {colors.includes("red") && (
          <div
            className={`red light ${color === "red" ? "glow" : ""}`}
            onClick={() => setColor("red")}
          ></div>
        )}
        {colors.includes("yellow") && (
          <div
            className={`yellow light ${color === "yellow" ? "glow" : ""}`}
            onClick={() => setColor("yellow")}
          ></div>
        )}
        {colors.includes("green") && (
          <div
            className={`green light ${color === "green" ? "glow" : ""}`}
            onClick={() => setColor("green")}
          ></div>
        )}
        {colors.includes("purple") && (
          <div
            className={`purple light ${color === "purple" ? "glow" : ""}`}
            onClick={() => setColor("purple")}
          ></div>
        )}
      </div>
      <button onClick={addPurpleLight}>Añadir púrpura</button>
    </div>
  );
};

export default Home;
