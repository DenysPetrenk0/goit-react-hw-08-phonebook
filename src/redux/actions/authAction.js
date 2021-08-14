/** @format */

import { createAction } from "@reduxjs/toolkit";

export const registerRequest = createAction("registerRequest");
export const registerSuccess = createAction("registerSuccess");
export const registerError = createAction("registerRequest");

export const loginRequest = createAction("loginRequest");
export const loginSuccess = createAction("loginSuccess");
export const loginError = createAction("loginRequest");

export const logoutRequest = createAction("logoutRequest");
export const logoutSuccess = createAction("logoutSuccess");
export const logoutError = createAction("logoutRequest");

export const getCurrentUserRequest = createAction("getCurrentUserRequest");
export const getCurrentUserSuccess = createAction("getCurrentUserSuccess");
export const getCurrentUserError = createAction("getCurrentUserRequest");
