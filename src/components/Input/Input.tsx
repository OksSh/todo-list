import { ChangeEventHandler } from 'react';

interface IProps {
  text: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ text, onChange }: IProps) => {
  return <input value={text} onChange={onChange} />;
};
