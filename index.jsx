import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainMenu from "./containers/MainMenu";
import Reader from "./containers/Reader";

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route component={MainMenu} exact path="/" />
        <Route component={Reader} path="/reader" />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<AppRouter />, document.getElementById("react-root"));
