import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const PLAYER = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function currentActivePlayer(gameTurn) {
  let currentPlayerSymbol = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayerSymbol = "O";
  }
  return currentPlayerSymbol;
}

function derivedWinner(gameBoard, player) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
      winner = player[firstSymbol];
    }
  }

  return winner;
}

function derivedGameBoard(gameTurn) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {
  // const [playerSymbol, setPlayerSymbol] = useState("X");
  const [gameTurn, setGameTurn] = useState([]);
  const [player, setPlayer] = useState(PLAYER);

  const playerSymbol = currentActivePlayer(gameTurn);

  const hasDraw = gameTurn.length === 9 && !winner;

  let gameBoard = derivedGameBoard(gameTurn);

  const winner = derivedWinner(gameBoard, player);

  function handleRematch() {
    setGameTurn([]);
  }

  function handleSelectSquare(rowIndex, colIndex) {
    // setPlayerSymbol((currentSymbol) => (currentSymbol === "X" ? "O" : "X"));
    setGameTurn((prevGameTurn) => {
      const currentPlayer = currentActivePlayer(prevGameTurn);
      const updatedGameTurn = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevGameTurn];
      return updatedGameTurn;
    });
  }

  function handleChangePlayerName(symbol, name) {
    setPlayer((prevPlayer) => {
      return { ...prevPlayer, [symbol]: name };
    });
  }

  console.log(player);

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYER.X} symbol="X" isActive={playerSymbol === "X"} onChangePlayerName={handleChangePlayerName} />
          <Player initialName={PLAYER.O} symbol="O" isActive={playerSymbol === "O"} onChangePlayerName={handleChangePlayerName} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} rematch={handleRematch} />}
        <GameBoard onSelectedSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
