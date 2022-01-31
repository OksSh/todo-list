interface IProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IProps) => {
  return (
    <button style={{ cursor: 'pointer' }} onClick={onClick}>
      {text}
    </button>
  );
};
