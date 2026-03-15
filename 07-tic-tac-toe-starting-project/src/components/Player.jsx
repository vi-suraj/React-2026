import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangePlayerName }) {
  const [playerName, setPlayerName] = useState(initialName);
  console.log(playerName);

  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editable) => !editable);
    if (isEditing) {
      onChangePlayerName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let player = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    player = <input type="text" value={playerName} required onChange={handleChange} />;
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {player}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
