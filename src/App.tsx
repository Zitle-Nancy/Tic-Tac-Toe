import { useState } from "react";
import "./App.css";

const Square = () => {
  const [value, setValue] = useState<null | string>(null);

  const handleClick = () => setValue("X");

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};
const Board = () => {
  return (
    <div className="container">
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Board;
