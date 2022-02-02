import { Form } from '../Form/Form';
import { TodoItem } from '../TodoItem/TodoItem';
import { useState } from 'react';
import styles from '../TodoList/TodoList.module.css';

interface ITodos {
  id: string;
  text: string;
  textDecoration: string;
  time: string;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<ITodos[]>([]);

  const onClickAdd = (textTodo: string) => {
    const date = new Date();
    if (textTodo) {
      const newTodo = {
        text: textTodo,
        id: 'id' + Math.random().toString(16).slice(2),
        textDecoration: 'none',
        time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
      };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
    } else {
      alert('Oops, you have nothing to do...');
    }
  };

  const onClickDelete = (id: string) => {
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const onClickComplete = (id: string) => {
    const newTodos = todos.map((item) => {
      if (item.id === id && item.textDecoration === 'none') {
        item.textDecoration = 'line-through';
      } else if (item.id === id && item.textDecoration === 'line-through') {
        item.textDecoration = 'none';
      }
      return item;
    });
    setTodos(newTodos);
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
              textDecoration={item.textDecoration}
              time={item.time}
            />
          );
        })}
      </div>
    </div>
  );
};
