/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { AuthNavStyled } from "./authNavStyled";

const AuthNav = () => {
  return (
    <AuthNavStyled>
      <NavLink
        to="/login"
        className="navigationLink"
        activeClassName="activNavigationLink"
        exact
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className="navigationLink"
        activeClassName="activNavigationLink"
        exact
      >
        Sing Up
      </NavLink>
    </AuthNavStyled>
  );
};

export default AuthNav;
