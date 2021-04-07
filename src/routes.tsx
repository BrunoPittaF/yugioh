import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import Search from "./Pages/Search";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
