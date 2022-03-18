export const SAVE_USER = "SAVE_USER";
export const SAVE_USER_NOTES = "SAVE_USER_NOTES";
export const LOG_ERROR = "LOG_ERROR";

// action creator
export const saveUser = (data) => {
  return { type: SAVE_USER, payload: data };
};

export const saveUserNotes = (data) => {
  return { type: SAVE_USER_NOTES, payload: data };
};

export const logError = (error) => ({ type: LOG_ERROR, payload: error });
