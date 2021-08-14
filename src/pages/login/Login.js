/** @format */

import React, { Component } from "react";
import { FormStyled } from "../registration/FormStyled";

class Login extends Component {
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
  };

  render() {
    return (
      <FormStyled onSubmit={this.handlSubmit}>
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="name"
          onChange={this.handlChange}
        />
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="e-mail"
          onChange={this.handlChange}
        />
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handlChange}
        />
        <button type="submit" className="form-button">
          Register
        </button>
      </FormStyled>
    );
  }
}

export default Login;
