/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { FormStyled } from "./FormStyled";
import { register } from "../../redux/operation/authOperation";

class Registration extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handlChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handlSubmit = async (event) => {
    const { name, email, password } = this.state;
    event.preventDefault();

    this.props.register({ name, email, password });

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <FormStyled onSubmit={this.handlSubmit}>
        <input
          value={name}
          className="form-input"
          type="text"
          name="name"
          placeholder="name"
          onChange={this.handlChange}
          required
        />
        <input
          value={email}
          className="form-input"
          type="email"
          name="email"
          placeholder="e-mail"
          onChange={this.handlChange}
          required
        />
        <input
          value={password}
          className="form-input"
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handlChange}
          required
        />
        <button type="submit" className="form-button">
          Register
        </button>
      </FormStyled>
    );
  }
}

export default connect(null, { register })(Registration);
