import React from "react";
import CalNumPad from "./CalNumPad";
import "./calbody.css";
import Footer from "./Footer";

export default function CalBody() {
  return (
    <div className="main__body">
      <CalNumPad />
      <Footer />
    </div>
  );
}
