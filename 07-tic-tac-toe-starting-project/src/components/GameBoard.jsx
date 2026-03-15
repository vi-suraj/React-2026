export default function GameBoard({ onSelectedSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(intialGameBoard);

  // function handleGameBoard(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const upadtedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
  //     upadtedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return upadtedGameBoard;
  //   });

  //   onSelectedSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectedSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
