import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Movies from "Routes/Movie/Movies";
import Search from "Routes/Search";
import TV from "Routes/TV/TV";
import Header from "./Header";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <hr />
        <Switch>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/tv">
            <TV />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
        <Redirect from="/" to="/movies" />
      </div>
    </Router>
  );
}
