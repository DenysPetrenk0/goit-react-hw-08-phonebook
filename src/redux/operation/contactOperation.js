/** @format */

import axios from "axios";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  getContactError,
  getContactRequest,
  getContactSuccess,
} from "../actions/contactsAction";

export const getContactOperation = () => async (dispatch) => {
  dispatch(getContactRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(getContactSuccess(data));
  } catch (error) {
    dispatch(getContactError(error.message));
  }
};

export const addContactOperation = (contact) => async (dispatch) => {
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export const deleteContactOperation = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};
