import React from "react";
const React = require("react");
import render from "react-dom";

const ce = React.createElement;

const MyTitle = function(props) {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};

const MyFirstComponent = function() {
  return ce("div", { id: "my-first-component" }, [
    ce(MyTitle, { title: "Mirror", color: "GreenYellow" }),
    ce(MyTitle, { title: "Dancer in the Dark", color: "YellowGreen" }),
    ce(MyTitle, { title: "Eraserhead", color: "LimeGreen" }),
    ce(MyTitle, { title: "Mulholland Drive", color: "Indigo" })
  ]);
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById("app"));
