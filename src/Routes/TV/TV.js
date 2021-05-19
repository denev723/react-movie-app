import React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import AiringToday from "./AiringToday";
import OnTheAir from "./OnTheAir";
import Popular from "./Popular";
import TopRated from "./TopRated";

function TV() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/airing-today`}>Airing Today</Link>
        </li>
        <li>
          <Link to={`${url}/top-rated`}>Top Rated</Link>
        </li>
        <li>
          <Link to={`${url}/popular`}>Popular</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path={path}>
          <OnTheAir />
        </Route>
        <Route path={`${path}/top-rated`}>
          <TopRated />
        </Route>
        <Route path={`${path}/popular`}>
          <Popular />
        </Route>
        <Route path={`${path}/airing-today`}>
          <AiringToday />
        </Route>
      </Switch>
    </div>
  );
}

export default TV;
