/** @format */

import React, { Component } from "react";
import Header from "./components/header/Header";
import { ContainerStyled } from "./components/container/ContainerStyled";
import { HeaderStyled } from "./components/header/HeaderStyled";
import Main from "./components/main/Main";
import { MainStyled } from "./components/main/MainStyled";
import { connect } from "react-redux";
import { getCurrentUser } from "./redux/operation/authOperation";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <HeaderStyled>
          <ContainerStyled>
            <Header />
          </ContainerStyled>
        </HeaderStyled>
        <MainStyled>
          <ContainerStyled>
            <Main />
          </ContainerStyled>
        </MainStyled>
      </>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
