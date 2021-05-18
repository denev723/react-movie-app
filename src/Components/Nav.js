import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul>
      <li>
        <Link to="/movie/top-rated">Top Rated</Link>
      </li>
      <li>
        <Link to="/movie/popular">Popular</Link>
      </li>
      <li>
        <Link to="/movie/upcoming">Upcoming</Link>
      </li>
    </ul>
  );
}
