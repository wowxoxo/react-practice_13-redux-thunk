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

// export const getUserCombinedData = (userId) => {
//   return (dispatch) => {
//     return dispatch(getUser(userId))
//       .then(() => dispatch(getUserNotes(userId)))
//       .then((data) => {
//         return { notes: data };
//       });
//   };
// };

export const getUserCombinedData = (userId) => {
  return (dispatch, getState) => {
    const userData = getState().userData;
    if (userData.user && userData.userNotes) {
      console.log("get exists data from store");
      return Promise.resolve({
        user: userData.user,
        notes: userData.userNotes
      });
    }

    console.log("data from server");
    return Promise.all([
      dispatch(getUser(userId)),
      dispatch(getUserNotes(userId))
    ]).then(([user, notes]) => {
      return { user: user.payload, notes: notes.payload };
    });
  };
};
