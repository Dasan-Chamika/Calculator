import React from "react";
import "./calscreen.css";

export default function CalScreen(props) {
  return (
    <div className="main__screen">
      <div className="preValue">{props.savedValue}</div>
      <div className="currentValue">{props.inputValue}</div>
    </div>
  );
}
