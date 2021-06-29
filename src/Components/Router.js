import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "Routes/Movie/Movies";
import Search from "Routes/Search";
import TV from "Routes/TV/TV";
import Header from "./Header";
import Home from "Routes/Home";
import Detail from "Routes/Detail";

// eslint-disable-next-line
export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/tv">
          <TV />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/movies/detail/:id">
          <Detail />
        </Route>
        <Route path="/tv/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
};
