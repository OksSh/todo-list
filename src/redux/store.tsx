import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todoReducer } from './redusers/todoReduser';

export const store = createStore(todoReducer, composeWithDevTools());
