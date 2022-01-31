import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { ChangeEvent } from 'react';

interface IProps {
  textTodo: string;
  setTextTodo: (value: string) => void;
  onClickAdd: () => void;
}

export const Form = ({ textTodo, setTextTodo, onClickAdd }: IProps) => {
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setTextTodo(event.target.value);
  };

  return (
    <div>
      <Input value={textTodo} onChange={onChangeValue} />
      <Button text='Add' onClick={onClickAdd} />
    </div>
  );
};
