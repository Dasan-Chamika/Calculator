import React, { useState } from "react";
import "./calnumpad.css";
import CalScreen from "./CalScreen";

export default function CalNumPad() {
  const [input, setInput] = useState("0");
  const [saved, setSaved] = useState("0");
  const [copyInput, setCopyInput] = useState(0);

  const numberClick = (e) => {
    if (input === "0") {
      setInput(e.target.id);
    } else {
      setInput(input + e.target.id);
    }
  };

  const numberZero = (e) => {
    setInput(input + e.target.id);
  };

  const opraterClick = (e) => {
    if (saved === "0" && e.target.id === "*") {
      setSaved(`${input} ×`);
      setCopyInput(`${input} ${e.target.id}`);
      setInput("0");
    } else if (saved === "0" && e.target.id === "/") {
      setSaved(`${input} ÷`);
      setCopyInput(`${input} ${e.target.id}`);
      setInput("0");
    } else if (saved === "0") {
      setSaved(`${input} ${e.target.id}`);
      setCopyInput(`${input} ${e.target.id}`);
      setInput("0");
    } else if (e.target.id === "*") {
      setSaved(`${saved} ${input} ×`);
      setCopyInput(`${copyInput} ${input} *`);
      setInput("0");
    } else if (e.target.id === "/") {
      setSaved(`${saved} ${input} ÷`);
      setCopyInput(`${copyInput} ${input} /`);
      setInput("0");
    } else {
      setSaved(`${saved} ${input} ${e.target.id}`);
      setCopyInput(`${copyInput} ${input} ${e.target.id}`);
      setInput("0");
    }
  };

  const clearAll = () => {
    setInput("0");
    setSaved("0");
  };

  const clear = () => {
    if (input.length !== 1) {
      setInput(input.slice(0, -1));
    } else if (input === "0") {
      if (saved.length !== 1) {
        setSaved(saved.slice(0, -2));
      } else {
        setSaved("0");
      }
    } else {
      setInput("0");
    }
  };

  const equal = () => {
    if (
      (input === "0" && saved === "0") ||
      (input.length > 0 && saved === "0")
    ) {
      setInput(input);
    } else if (saved !== "0" && input.length === 0) {
      setInput(saved);
    } else if (saved.slice(-1) !== "×" && saved.slice(-1) !== "÷") {
      setInput(eval(copyInput + input).toString());
      setSaved("0");
    } else if (saved.slice(-1) === "×" || saved.slice(-1) === "÷") {
      setInput(eval(copyInput + input).toString());
      setSaved("0");
    } else {
      setInput("Invalid");
    }
  };

  return (
    <div className="main__container">
      <CalScreen inputValue={input} savedValue={saved} />
      <div className="main__numpad">
        <div className="firstRow">
          <div
            className="numDiv"
            style={{ backgroundColor: "#cdcdd1", color: "black" }}
            onClick={clearAll}
          >
            C
          </div>
          <div
            className="numDiv"
            style={{ backgroundColor: "#cdcdd1", color: "black" }}
            onClick={clear}
          >
            CE
          </div>
          <div
            className="numDiv"
            style={{ backgroundColor: "#cdcdd1", color: "black" }}
            onClick={opraterClick}
            id={"%"}
          >
            %
          </div>
          <div
            className="numDiv"
            style={{ backgroundColor: "#229891", color: "#fff" }}
            onClick={opraterClick}
            id={"/"}
          >
            ÷
          </div>
        </div>
        <div className="secRow">
          <div className="numDiv" onClick={numberClick} id={"7"}>
            7
          </div>
          <div className="numDiv" onClick={numberClick} id={"8"}>
            8
          </div>
          <div className="numDiv" onClick={numberClick} id={"9"}>
            9
          </div>
          <div
            className="numDiv"
            style={{ backgroundColor: "#FCA603", color: "#fff" }}
            onClick={opraterClick}
            id={"*"}
          >
            ×
          </div>
        </div>
        <div className="thirdRow">
          <div className="numDiv" onClick={numberClick} id={"4"}>
            4
          </div>
          <div className="numDiv" onClick={numberClick} id={"5"}>
            5
          </div>
          <div className="numDiv" onClick={numberClick} id={"6"}>
            6
          </div>
          <div
            className="numDiv"
            style={{ backgroundColor: "#EA8180", color: "#fff" }}
            onClick={opraterClick}
            id={"-"}
          >
            -
          </div>
        </div>
        <div className="fourthRow">
          <div className="numDiv" onClick={numberClick} id={"1"}>
            1
          </div>
          <div className="numDiv" onClick={numberClick} id={"2"}>
            2
          </div>
          <div className="numDiv" onClick={numberClick} id={"3"}>
            3
          </div>
          <div
            className="numDiv"
            style={{ backgroundColor: "#7E93E0", color: "#fff" }}
            onClick={opraterClick}
            id={"+"}
          >
            +
          </div>
        </div>
        <div className="fifthRow">
          <div className="emptydiv"></div>
          <div className="numDiv" onClick={numberZero} id={"0"}>
            0
          </div>
          <div className="emptydiv"></div>
          <div
            className="numDiv"
            style={{ backgroundColor: "#8D73A6", color: "#fff" }}
            onClick={equal}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}
