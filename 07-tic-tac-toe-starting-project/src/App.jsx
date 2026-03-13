import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [playerSymbol, setPlayerSymbol] = useState("X");

  function handleSelectSquare() {
    setPlayerSymbol((currentSymbol) => (currentSymbol === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={playerSymbol === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={playerSymbol === "O"} />
        </ol>
        <GameBoard onSelectedSquare={handleSelectSquare} activePlayerSymbol={playerSymbol}/>
      </div>
      LOG
    </main>
  );
}

export default App;
