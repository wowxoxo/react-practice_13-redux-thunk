import { getAll } from "../../api/todos";
import { INIT_TODOS } from "./actions";

export const getTodos = () => {
  return (dispatch) => {
    getAll()
      .then((todos) => {
        dispatch({
          type: INIT_TODOS,
          payload: todos
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
