/** @format */
import React, { Component } from "react";
import { AddContact } from "./AddContactStyles";
import { connect } from "react-redux";
import {
  addContactOperation,
  getContactOperation,
} from "../../redux/operation/contactOperation";
import { getContacts } from "../../redux/selectors/contactsSelectors";

class addContact extends Component {
  state = {
    name: "",
    number: "",
  };

  componentDidMount = () => {
    this.props.getContactOperation();
  };

  onHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    const { name, number } = this.state;
    event.preventDefault();
    if (
      this.props.contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      this.props.addContactOperation({ name, number });
      this.setState({ name: "", number: "" });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <AddContact onSubmit={this.onSubmit}>
        <input
          value={name}
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Name"
          className="form-input"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={this.onHandleChange}
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <input
          value={number}
          type="tel"
          name="number"
          autoComplete="off"
          placeholder="Number"
          className="form-input"
          onChange={this.onHandleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button type="submit" className="form-button">
          Add Contact
        </button>
      </AddContact>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: getContacts(state),
  };
};

export default connect(mapStateToProps, {
  addContactOperation,
  getContactOperation,
})(addContact);
