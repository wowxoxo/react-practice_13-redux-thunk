import * as userApi from "../../api/users";
import * as notesApi from "../../api/notes";
import { saveUser, saveUserNotes, logError } from "./actions";

const getUser = (userId) => {
  return (dispatch) => {
    return userApi
      .getUser(userId)
      .then((data) => dispatch(saveUser(data)))
      .catch((error) => dispatch(logError(error)));
  };
};

const getUserNotes = (userId) => {
  return (dispatch) => {
    return notesApi
      .getUserNotes(userId)
      .then((data) => dispatch(saveUserNotes(data)))
      .catch((error) => dispatch(logError(error)));
  };
};

export const getUserCombinedData = (userId) => {
  return (dispatch) => {
    return dispatch(getUser(userId))
      .then(() => dispatch(getUserNotes(userId)))
      .then((data) => {
        return Promise.resolve({ notes: data });
      });
  };
};
