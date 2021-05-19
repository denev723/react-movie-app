import React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Upcoming from "./Upcoming";

function Movies() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/top-rated`}>Top Rated</Link>
        </li>
        <li>
          <Link to={`${url}/popular`}>Popular</Link>
        </li>
        <li>
          <Link to={`${url}/upcoming`}>Upcoming</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path={path}>
          <NowPlaying />
        </Route>
        <Route path={`${path}/top-rated`}>
          <TopRated />
        </Route>
        <Route path={`${path}/popular`}>
          <Popular />
        </Route>
        <Route path={`${path}/upcoming`}>
          <Upcoming />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
