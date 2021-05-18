import React from "react";
import { Route } from "react-router-dom";
import Popular from "Routes/Popular";
import Upcoming from "Routes/Upcoming";
import TopRated from "Routes/TopRated";
import Nav from "Components/Nav";

export default function Movie() {
  return (
    <>
      <Nav />
      <div>
        <h1>Movie</h1>
        <Route path="/top-rated" component={TopRated} />
        <Route path="/popular" component={Popular} />
        <Route path="/upcoming" component={Upcoming} />
      </div>
    </>
  );
}
