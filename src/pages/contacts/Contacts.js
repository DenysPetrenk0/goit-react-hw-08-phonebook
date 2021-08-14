/** @format */

import React from "react";
import { connect } from "react-redux";
import FindContact from "../../components/findContact/FindContact";
import Phonebook from "../../components/phonebook/Phonebook";
import Section from "../../components/section/Section";
import { getLoading } from "../../redux/selectors/contactsSelectors";

const Contacts = (loading) => {
  return (
    <>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <FindContact />
        {loading.loading && <p> Loading... </p>}
        <ul>{/* <Contacts /> */}</ul>
      </Section>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: getLoading(state),
  };
};

export default connect(mapStateToProps)(Contacts);
