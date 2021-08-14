/** @format */

import React from "react";
import { AuthNavStyled } from "../authNav/authNavStyled";

const UserMenu = () => {
  return (
    <AuthNavStyled>
      <button type="button" className="logout-button">
        Logout
      </button>
    </AuthNavStyled>
  );
};

export default UserMenu;
