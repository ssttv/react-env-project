import React, { Component } from "react";
import { render } from "react-dom";
import logo from "./logo.svg";
import "./App.css";

const multiply = (a, b) => a * b * a;

const App = () => (
  <div classname="app">
    <div classname="landing">
      <h1>Video App</h1>
      <input type="text" placeholder="Search the App" />
      <a>or Browse All</a>
    </div>
  </div>
);

export default App;
