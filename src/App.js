import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

const multiply = (a, b) => a * b;
const FourOhFour = () => <h1>404</h1>;
const App = () => (
  <div classname="app">
    <Switch>
    <Route exact path="/" component={Landing} />
    <Route path = "/search" component={Search} />
    <Route component = {FourOhFour} />
    </Switch>
    </div>
  </div>
);

export default App;
