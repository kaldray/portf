import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/projects" component={Project}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
  );
}

export default App;
