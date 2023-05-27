interface ISquare {
  value: string;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: ISquare) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
