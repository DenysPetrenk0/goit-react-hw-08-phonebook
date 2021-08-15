/** @format */

import React from "react";
import { connect } from "react-redux";
import FindContact from "../../components/findContact/FindContact";
import AddContact from "../../components/addContact/AddContact";
import Section from "../../components/section/Section";
import { getLoading } from "../../redux/selectors/contactsSelectors";
import PhoneBook from "../../components/phoneBook/PhoneBook";
import { ContactStyled } from "./ContactStyled";

const Contacts = (loading) => {
  return (
    <ContactStyled>
      <Section title="Find Contsct by Name">
        <FindContact />
      </Section>
      <div className="contact-box">
        <Section title="Add Contact">
          <AddContact />
        </Section>
        <Section title="Contacts">
          {loading.loading ? (
            <p className="loading"> Loading... </p>
          ) : (
            <ul>
              <PhoneBook />
            </ul>
          )}
        </Section>
      </div>
    </ContactStyled>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: getLoading(state),
  };
};

export default connect(mapStateToProps)(Contacts);
