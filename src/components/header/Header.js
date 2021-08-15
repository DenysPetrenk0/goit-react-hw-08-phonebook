/** @format */

import React from "react";
import { headerRoutes } from "../../routes/headerRoutes";
import Navigation from "../navigation/Navigation";
import { withRouter } from "react-router-dom";
import { NavigationStyled } from "../navigation/NavigationStyled";
import AuthNav from "../authNav/AuthNav";
import UserMenu from "../usreMenu/UserMenu";
import { connect } from "react-redux";
import { getIsAuthenticated } from "../../redux/selectors/contactsSelectors";

const Header = ({ location, isAuth }) => {
  return (
    <NavigationStyled>
      <Navigation routes={headerRoutes} prevPathname={location.pathname} />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </NavigationStyled>
  );
};

const mapStateToProps = (state) => ({
  isAuth: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(withRouter(Header));
