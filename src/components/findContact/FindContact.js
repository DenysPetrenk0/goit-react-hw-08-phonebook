/** @format */

import React from "react";
import { DivFindContact } from "./FindContactStyles";
import { connect } from "react-redux";
import { filterContacts } from "../../redux/actions/contactsAction";

const FindContact = ({ filterContacts, filter }) => {
  const onHandleChange = (event) => {
    const query = event.target.value;
    filterContacts(query);
  };

  return (
    <DivFindContact>
      <input
        type="text"
        value={filter}
        name="filter"
        autoComplete="off"
        className="form-input"
        onChange={onHandleChange}
      />
    </DivFindContact>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

export default connect(mapStateToProps, { filterContacts })(FindContact);
