import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function currentActivePlayer(gameTurn) {
  let currentPlayerSymbol = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayerSymbol = "O";
  }
  return currentPlayerSymbol;
}

function App() {
  // const [playerSymbol, setPlayerSymbol] = useState("X");
  const [gameTurn, setGameTurn] = useState([]);

  const playerSymbol = currentActivePlayer(gameTurn);

  function handleSelectSquare(rowIndex, colIndex) {
    // setPlayerSymbol((currentSymbol) => (currentSymbol === "X" ? "O" : "X"));
    setGameTurn((prevGameTurn) => {
      const currentPlayer = currentActivePlayer(prevGameTurn);
      const updatedGameTurn = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevGameTurn];
      return updatedGameTurn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={playerSymbol === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={playerSymbol === "O"} />
        </ol>
        <GameBoard onSelectedSquare={handleSelectSquare} turns={gameTurn} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
