/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ routes, url = "", prevPathname = "" }) => {
  return (
    <ul className="navigationList">
      {routes.map((route) => (
        <li className="navigationItem" key={route.path}>
          <NavLink
            className="navigationLink"
            activeClassName="activNavigationLink"
            to={{ pathname: url + route.path, state: { from: prevPathname } }}
            exact={route.exact}
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
