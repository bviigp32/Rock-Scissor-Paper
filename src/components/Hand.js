import React from "react";
import "./Hand.css";

function Hand({ icon }) {
  return (
    <div className="Hand">
      <img className="Hand-icon" src={icon} alt="" />
    </div>
  );
}

export default Hand;
