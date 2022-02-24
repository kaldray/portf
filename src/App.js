import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
  );
}

export default App;
