import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { logger } from "../middlewares/logger";
import { todoReducer } from "./todos/reducer";

export const mainReducer = combineReducers({
  todos: todoReducer
});

export const store = createStore(
  mainReducer,
  compose(
    applyMiddleware(logger),
    process.env.NODE_ENV === "development" &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
