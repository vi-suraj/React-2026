import { useState } from "react";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectedSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(intialGameBoard);

  function handleGameBoard(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const upadtedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
      upadtedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
      return upadtedGameBoard;
    });

    onSelectedSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleGameBoard(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
