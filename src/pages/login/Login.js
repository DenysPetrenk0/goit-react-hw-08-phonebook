/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../redux/operation/authOperation";
import { FormStyled } from "../registration/FormStyled";

class Login extends Component {
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

    this.props.logIn({ email, password });

    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <FormStyled className="form" onSubmit={this.handlSubmit}>
        <input
          value={email}
          className="form-input"
          type="email"
          name="email"
          placeholder="e-mail"
          onChange={this.handlChange}
          autoComplete="off"
          required
        />
        <input
          value={password}
          className="form-input"
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handlChange}
          autoComplete="off"
          required
        />
        <button type="submit" className="form-button">
          Sing In
        </button>
      </FormStyled>
    );
  }
}

export default connect(null, { logIn })(Login);
// export default Login;
