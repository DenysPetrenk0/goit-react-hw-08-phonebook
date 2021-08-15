/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getIsAuthenticated } from "../../redux/selectors/contactsSelectors";

const NavigationListItem = ({
  path,
  exact,
  name,
  url = "",
  prevPathname = "",
  isAuth,
  isPrived,
  restricted,
}) => {
  return (
    <>
      {!isPrived && !restricted && (
        <li className="navigationItem">
          <NavLink
            className="navigationLink"
            activeClassName="activNavigationLink"
            to={{ pathname: url + path, state: { from: prevPathname } }}
            exact={exact}
          >
            {name}
          </NavLink>
        </li>
      )}
      {isPrived && !restricted && isAuth && (
        <li className="navigationItem">
          <NavLink
            className="navigationLink"
            activeClassName="activNavigationLink"
            to={{ pathname: url + path, state: { from: prevPathname } }}
            exact={exact}
          >
            {name}
          </NavLink>
        </li>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(NavigationListItem);
