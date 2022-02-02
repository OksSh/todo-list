import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { ChangeEvent } from 'react';
import { useState } from 'react';

interface IProps {
  onClickAdd: (textTodo: string) => void;
}

export const Form = ({ onClickAdd }: IProps) => {
  const [textTodo, setTextTodo] = useState<string>('');

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setTextTodo(event.target.value);
  };

  const handleAddNewTodo = () => {
    onClickAdd(textTodo.trim());
    setTextTodo('');
  };

  return (
    <div>
      <Input text={textTodo} onChange={onChangeValue} />
      <Button text='Add' onClick={handleAddNewTodo} />
    </div>
  );
};
