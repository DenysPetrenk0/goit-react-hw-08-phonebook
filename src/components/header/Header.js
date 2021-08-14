/** @format */

import React from "react";
import { headerRoutes } from "../../routes/headerRoutes";
import Navigation from "../navigation/Navigation";
import { withRouter } from "react-router-dom";
import { NavigationStyled } from "../navigation/NavigationStyled";
import AuthNav from "../authNav/AuthNav";
import UserMenu from "../usreMenu/UserMenu";

const Header = ({ location, isAuth }) => {
  return (
    <NavigationStyled>
      <Navigation routes={headerRoutes} prevPathname={location.pathname} />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </NavigationStyled>
  );
};

export default withRouter(Header);
