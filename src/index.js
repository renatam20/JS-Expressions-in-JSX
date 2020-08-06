import React from "react";
import ReactDOM from "react-dom";

const fName = "Renata";
const lName = "Mazetto";
const luckyNumber = 10;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>
      <em>Your lucky number is </em>
      {luckyNumber}
    </p>
  </div>,
  document.getElementById("root")
);
