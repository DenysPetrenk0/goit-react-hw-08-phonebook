/** @format */

import React from "react";
import NavigationListItem from "./NavigationListItem";

const Navigation = ({ routes }) => {
  return (
    <ul className="navigationList">
      {routes.map((route) => (
        <NavigationListItem {...route} key={route.path} />
      ))}
    </ul>
  );
};

export default Navigation;
