import { useState } from "react";
import "./App.css";
import Board from "./Board";

const Game = () => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares: string[]) => {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  };

  const movementHistory = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{movementHistory}</ol>
      </div>
    </div>
  );
};

export default Game;
