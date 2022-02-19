import { ACTIONS } from '../redusers/constants';

export const addTodo = (text: string) => {
  return {
    type: ACTIONS.ADD_TODO,
    text: text,
  };
};

export const deleteTodo = (id: string) => {
  return {
    type: ACTIONS.DELETE,
    id: id,
  };
};

export const completeTodo = (id: string) => {
  return { type: ACTIONS.COMPLETE, id: id };
};
