/** @format */

import React, { Component } from "react";
import { FormStyled } from "./FormStyled";

class Registration extends Component {
  state = {
    email: "",
    password: "",
  };

  handlChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handlSubmit = async (event) => {
    const { email, password } = this.state;
    event.preventDefault();
  };

  render() {
    return (
      <FormStyled className="form" onSubmit={this.handlSubmit}>
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

export default Registration;
