import React from "react";
import { Outlet, Link } from "react-router-dom";

const NavigationLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/articles-list">Articles List</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default NavigationLayout;