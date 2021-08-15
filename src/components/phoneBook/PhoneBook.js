/** @format */

import React from "react";
import { connect } from "react-redux";
import { getVisibleContact } from "../../redux/selectors/contactsSelectors";
import { deleteContactOperation } from "../../redux/operation/contactOperation";
import { PhoneBookStyled } from "./PhoneBookStyles";

const PhoneBook = ({ contacts, deleteContactOperation }) => {
  return contacts.map((contact) => (
    <PhoneBookStyled key={contact.id}>
      <p className="textContact">{contact.name}</p>
      <p className="textContact">:</p>
      <p className="textContact">{contact.number}</p>
      <button
        type="button"
        className="form-button"
        onClick={() => deleteContactOperation(contact.id)}
      >
        Delete
      </button>
    </PhoneBookStyled>
  ));
};

const mapStateToProps = (state) => {
  return {
    contacts: getVisibleContact(state),
  };
};

export default connect(mapStateToProps, {
  deleteContactOperation,
})(PhoneBook);
