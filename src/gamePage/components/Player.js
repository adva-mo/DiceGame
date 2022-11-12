import React from "react";
import CurrentPoints from "./CurrentPoints";

import "./player.css";

function Player({ name, totalPoints, currentPoints, globalPoints }) {
  return (
    <div className={`player flex-column`}>
      <h2 id="wins-title">wins: {globalPoints}</h2>
      <h1>{name}</h1>
      <h3>total :{totalPoints}</h3>
      <CurrentPoints current={currentPoints} />
    </div>
  );
}

export default Player;
