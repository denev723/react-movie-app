import React from "react";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <a href="/movie">Movie</a>
        </li>
        <li>
          <a href="/tv">TV</a>
        </li>
      </ul>
      <h1>MOVIE APP</h1>
      <ul>
        <li>
          <a href="/search">Search</a>
        </li>
      </ul>
    </header>
  );
}
