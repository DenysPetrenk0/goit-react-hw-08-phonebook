/** @format */

import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../redux/operation/authOperation";
import { getUserName } from "../../redux/selectors/contactsSelectors";
import { AuthNavStyled } from "../authNav/authNavStyled";

const UserMenu = ({ name, logOut }) => {
  return (
    <AuthNavStyled>
      <span className="userName">{name}</span>
      <button type="button" className="logout-button" onClick={logOut}>
        Logout
      </button>
    </AuthNavStyled>
  );
};

const mapStateToProps = (state) => ({
  name: getUserName(state),
});

export default connect(mapStateToProps, { logOut })(UserMenu);
