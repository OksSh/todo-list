export interface IStateProps {
  text: string;
  textDecoration: string;
  time: string;
  id: string;
}

export interface ITodosState {
  todos: IStateProps[];
}

const defaultState: ITodosState = {
  todos: [],
};

export const todoReducer = (state = defaultState, action: any) => {
  if (action.type === 'CLICK_ADD_TODO') {
    const date = new Date();
    if (action.text) {
      const newTodo = {
        text: action.text,
        id: 'id' + Math.random().toString(16).slice(2),
        textDecoration: 'none',
        time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
      };
      const newTodos = [...state.todos, newTodo];
      return { todos: newTodos };
    } else {
      alert('Oops, you have nothing to do...');
    }
  }

  if (action.type === 'CLICK_DELETE_TODO') {
    const newTodos = state.todos.filter((item) => {
      return item.id !== action.id;
    });
    return { todos: newTodos };
  }

  if (action.type === 'CLICK_COMPLETE_TODO') {
    const newTodos = state.todos.map((item) => {
      if (item.id === action.id && item.textDecoration === 'none') {
        item.textDecoration = 'line-through';
      } else if (
        item.id === action.id &&
        item.textDecoration === 'line-through'
      ) {
        item.textDecoration = 'none';
      }
      return item;
    });
    return { todos: newTodos };
  }

  return state;
};
