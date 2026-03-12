import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editable) => !editable);
  }

  let player = <span className="player-name">{name}</span>;

  if (isEditing) {
    player = <input type="text" value={name} />;
  }

  return (
    <li>
      <span className="player">
        {player}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
