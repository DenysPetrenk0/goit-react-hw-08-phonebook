/** @format */

import styled from "styled-components";

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;

  .navigationList {
    display: flex;
    align-items: center;
    list-style: none;
  }
  .navigationLink:not(:last-child) {
    margin-right: 20px;
  }

  .navigationItem {
    margin-right: 20px;
  }

  .navigationLink {
    font-family: Recursive;
    letter-spacing: 0;
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;
    color: #ffffff;

    background-image: linear-gradient(#a67f4e, #a67f4e);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size 0.3s;

    &:hover {
      background-size: 100% 2px;
    }
  }

  .activNavigationLink {
    color: #a67f4e;
  }

  .logoIcon {
    width: 40px;
    height: 40px;
    fill: #a67f4e;

    &:hover {
      fill: #ffffff;
      transition: fill 0.3s;
    }
  }
  .logout-button {
    font-family: Recursive;
    width: 150px;
    height: 40px;
    font-size: 15px;
    border: 1px solid #a67f4e;
    color: #fff;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #a67f4e;
    }
  }
`;
