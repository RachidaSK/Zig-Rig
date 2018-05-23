import React from "react";
import "./DeleteButton.css";

const DeleteButton = props => (
  <span className="deleteButton" {...props}>
    ✗
  </span>
);

export default DeleteButton;