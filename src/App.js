/** @format */

import React from "react";
import Header from "./components/header/Header";
import { ContainerStyled } from "./components/container/ContainerStyled";
import { HeaderStyled } from "./components/header/HeaderStyled";
import Main from "./components/main/Main";
import { MainStyled } from "./components/main/MainStyled";

const App = () => {
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
};

export default App;
