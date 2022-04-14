import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <div className="navigation">
        <Link to="/">
          <h1>
            Gaming <br />
            Center
          </h1>
        </Link>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/games">
            <li>games</li>
          </Link>
          <Link to="/add">
            <li>Add new game</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
