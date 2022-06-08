import Item from "./Item";
var React = require("react"); // or import React from "react"
var ReactDom = require("react-dom");
function Heading() {
  return <h1>My favourite food</h1>;
}
ReactDom.render(
  <div>
    <Heading />
    <Item />
  </div>,
  document.getElementById("root")
);
