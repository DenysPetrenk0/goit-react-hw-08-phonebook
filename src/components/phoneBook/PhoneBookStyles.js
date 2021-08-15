/** @format */

import styled from "styled-components";

export const PhoneBookStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  .textContact {
    font-family: Recursive;
    font-size: 17px;
    color: #ffffff;
    margin-right: 10px;
  }

  .form-button {
    font-family: Recursive;
    width: 100px;
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
    margin-top: 30px;

    &:hover {
      background-color: #a67f4e;
    }
  }
`;
