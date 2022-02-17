import { Button } from '../Button/Button';
import styles from '../TodoItem/TodoItem.module.css';

export interface ITodoProps {
  text: string;
  onDelete: () => void;
  onComplete: () => void;
  textDecoration: string;
  time: string;
  id: string;
}

export function TodoItem({
  text,
  time,
  onDelete,
  onComplete,
  textDecoration,
  id,
}: ITodoProps) {
  return (
    <div className={styles.todoItem} style={{ display: 'flex' }}>
      {time ? (
        <p style={{ textDecoration: `${textDecoration}` }}>{time}</p>
      ) : null}
      <p style={{ textDecoration: `${textDecoration}`, margin: '0px 20px' }}>
        {text}
      </p>
      <div className={styles.buttonDelete}>
        <Button text='&#10006;' onClick={onDelete} />
      </div>
      <div className={styles.buttonComplete}>
        <Button text='&#10004;' onClick={onComplete} />
      </div>
    </div>
  );
}
