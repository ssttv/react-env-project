import React, { Component } from "react";
import { render } from "react-dom";
import logo from "./logo.svg";
import "./App.css";

const add = (a, b) => a + b;

const App = () => (
  <div classname="app">
    <div classname="landing">
      <h1>Video App</h1>
      <input type="text" placeholder="Search" />
      <a>or Browse All</a>
    </div>
  </div>
);

export default App;
