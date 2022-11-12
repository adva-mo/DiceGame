import React from "react";
import CurrentPoints from "./CurrentPoints";

function Player({ name, totalPoints, currentPoints, setp1turn }) {
  return (
    <div className="player">
      <h2>{name}</h2>
      <h1>total :{totalPoints}</h1>
      <CurrentPoints current={currentPoints} setp1turn={setp1turn} />
    </div>
  );
}

export default Player;
