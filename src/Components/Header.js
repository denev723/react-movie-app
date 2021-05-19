import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/tv">TV</Link>
        </li>
      </ul>
      <h1>Movie App</h1>
      <Link to="/search">Search</Link>
    </div>
  );
}
