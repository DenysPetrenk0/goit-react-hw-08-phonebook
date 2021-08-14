/** @format */

import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { registerRequest } from "../actions/authAction";

const initialState = { name: "", email: "" };

const userReducer = createReducer(initialState, {});
const tokenReducer = createReducer(null, {});
const errorReducer = createReducer(null, {});

const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer,
});

export default authReducer;
