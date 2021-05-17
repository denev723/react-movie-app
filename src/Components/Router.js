import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Movie from "Routes/Movie";
import Search from "Routes/Search";
import TV from "Routes/TV";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movie" exact component={Movie} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" exact component={Search} />
    </Switch>
  </BrowserRouter>
);

export default Router;
