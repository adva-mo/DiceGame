import React, { useState } from "react";
import CurrentPoints from "./CurrentPoints";
import Cube from "./Cube";

function Player({ name, total, current }) {
  return (
    <div className="player">
      <h2>{name}</h2>
      <h1>totel :{total}</h1>
      <CurrentPoints current={current} />
    </div>
  );
}

export default Player;
