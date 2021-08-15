/** @format */

import styled from "styled-components";

export const AddContact = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  .form-input {
    box-sizing: border-box;
    background-color: transparent;
    border: 0;
    height: 45px;
    width: 420px;
    border-bottom: 1px solid #dcdcdc;
    margin-bottom: 50px;
    padding-left: 10px;
    outline: none;
    color: #ffffff;

    &::placeholder {
      font-family: Recursive;
      font-size: 17px;
      color: #ffffff;
    }
  }

  .form-button {
    font-family: Recursive;
    width: 250px;
    height: 60px;
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
