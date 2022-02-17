import { Form } from '../Form/Form';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from '../TodoList/TodoList.module.css';
import { ITodosState } from '../../redux/redusers/todoReduser';
import { useDispatch, useSelector } from 'react-redux';

export const TodoList = () => {
  const state = useSelector((state: ITodosState) => state);
  const todos = state.todos;

  console.log(state);
  const dispatch = useDispatch();

  const onClickAdd = (textTodo: string) => {
    dispatch({ type: 'CLICK_ADD_TODO', text: textTodo });
  };

  const onClickDelete = (id: string) => {
    dispatch({ type: 'CLICK_DELETE_TODO', id: id });
  };

  const onClickComplete = (id: string) => {
    dispatch({ type: 'CLICK_COMPLETE_TODO', id: id });
  };

  const onCountComplete = todos.reduce((prev, current) => {
    if (current.textDecoration === 'line-through') {
      return prev + 1;
    }
    return prev;
  }, 0);

  return (
    <div className={styles.todoList}>
      <h1>To do list</h1>
      <div className={styles.todoList__form}>
        <Form onClickAdd={onClickAdd} />
      </div>
      <p>Total cases: {todos.length}</p>
      <p>Finished cases: {onCountComplete}</p>
      <p>Unfinished cases: {todos.length - onCountComplete}</p>
      <div className={styles.todoList__todoItems}>
        {todos.map((item) => {
          return (
            <TodoItem
              text={item.text}
              onDelete={() => onClickDelete(item.id)}
              onComplete={() => onClickComplete(item.id)}
              key={item.id}
              id={item.id}
              textDecoration={item.textDecoration}
              time={item.time}
            />
          );
        })}
      </div>
    </div>
  );
};
