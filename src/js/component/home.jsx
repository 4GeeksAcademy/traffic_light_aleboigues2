import React, { useState } from 'react';


export default function Home() {
  const [selectedColor, setselectedColor] = useState("green");
  const changeColor = () => {
    switch (selectedColor) {
      case "red":
        setselectedColor("yellow");
        break;
      case "yellow":
        setselectedColor("green");
        break;
      case "green":
        setselectedColor("red");
        break;
      default:
        setselectedColor("red");

    }
  };

  return (
    <div className="traffic-light">
      <div
        onClick={() => setselectedColor("red")}
        className={
          "light red" + (selectedColor === "red" ? " glow" : "")
        }></div>
      <div
        onClick={() => setselectedColor("yellow")}
        className={
          "light yellow" + (selectedColor === "yellow" ? " glow" : "")
        }></div>
      <div
        onClick={() => setselectedColor("green")}
        className={"light green" + (selectedColor === "green" ? " glow" : "")
        }></div>
      <button onClick={changeColor}></button>
    </div>
  );
}


