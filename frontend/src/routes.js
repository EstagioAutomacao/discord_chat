import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Login {...props} />} />
        <Route path="/home" render={() => <Home {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
