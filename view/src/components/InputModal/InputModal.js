import React from "react";
import "./InputModal.css";

export const InputModal = props => (
  <div className="inputModalDiv">
    <input className="inputModal" {...props} />
  </div>
);