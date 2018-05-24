import React from "react";
import "./ContactInput.css";

export const ContactInput = props => (
  <div className="contactInputDiv">
    <input className="contactInput" {...props} />
  </div>
);