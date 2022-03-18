import { SAVE_USER, SAVE_USER_NOTES, LOG_ERROR } from "./actions";

const initState = {
  user: null,
  userNotes: null,
  error: null
};

export const notesReducer = (state = initState, action) => {
  switch (action.type) {
    case SAVE_USER: {
      const user = action.payload;
      return { ...state, user };
    }

    case SAVE_USER_NOTES: {
      const userNotes = action.payload;
      return { ...state, userNotes };
    }

    case LOG_ERROR: {
      const error = action.payload;
      return { ...state, error };
    }

    default:
      return state;
  }
};
