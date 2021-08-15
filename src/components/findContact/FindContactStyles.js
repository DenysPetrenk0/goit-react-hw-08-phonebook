/** @format */

import styled from "styled-components";

export const DivFindContact = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  .form-input {
    box-sizing: border-box;
    background-color: transparent;
    border: 0;
    height: 45px;
    width: 520px;
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
`;
