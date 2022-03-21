import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { logger } from "../middlewares/logger";
import { todoReducer } from "./todos/reducer";
import thunk from "redux-thunk";
import { notesReducer } from "./notes/reducer";

export const mainReducer = combineReducers({
  todos: todoReducer,
  userData: notesReducer
});

export const store = createStore(
  mainReducer,
  compose(
    applyMiddleware(logger, thunk),
    process.env.NODE_ENV === "development" &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
