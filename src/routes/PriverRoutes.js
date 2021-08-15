/** @format */
import React from "react";
import { Redirect, Route } from "react-router-dom";

const PriverRoutes = ({ isAuth, path, component, exact }) => {
  return !isAuth ? (
    <Redirect to="/login" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PriverRoutes;
