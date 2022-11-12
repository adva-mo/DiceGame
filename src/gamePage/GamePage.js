import React, { useState } from "react";
import Player from "./components/Player";

import "./gamePage.css";
import Cube from "./components/Cube";

function GamePage({
  SetDisplayedPage,
  setp1turn,
  p1turn,
  names,
  numberOfCubes,
  setWins,
  wins,
}) {
  const [p1currentPoints, setP1currentPoints] = useState(0);
  const [p2currentPoints, setP2currentPoints] = useState(0);
  const [p1totalPoints, setP1totalPoints] = useState(0);
  const [p2totalPoints, setP2totalPoints] = useState(0);
  const [P1globalPoints, setP1globalPoints] = useState(0);
  const [P2globalPoints, setP2globalPoints] = useState(0);

  const app = {
    player1: {
      name: names[0],
      totalPoints: p1totalPoints,
      currentPoints: p1currentPoints,
      globalPoints: P1globalPoints,
    },
    player2: {
      name: names[1],
      totalPoints: p2totalPoints,
      currentPoints: p2currentPoints,
      globalPoints: P2globalPoints,
    },
  };

  const backToSettingsHandler = () => {
    SetDisplayedPage((perv) => null);
  };

  return (
    <div className="game-page">
      <div className="players-container flex-row">
        <Player
          key={"p1"}
          {...app.player1}
          // p1turn={p1turn}
          // className={p1turn ? "selected" : ""}
        />
        <button id="back-to-chart" onClick={backToSettingsHandler}>
          back to settings
        </button>
        <Player
          key={"p2"}
          {...app.player2}
          // p1turn={p1turn}
          // className={!p1turn ? "selected" : ""}
        />
      </div>
      <>
        <Cube
          {...(p1turn ? app.player1 : app.player2)}
          numberOfCubes={numberOfCubes}
          target={names[2]}
          names={names}
          p1turn={p1turn}
          // currentPoints={p1turn ? p1currentPoints : p2currentPoints}
          setp1turn={setp1turn}
          setP1totalPoints={setP1totalPoints}
          setP2totalPoints={setP2totalPoints}
          setCurrentPoints={p1turn ? setP1currentPoints : setP2currentPoints}
          setP1globalPoints={setP1globalPoints}
          setP2globalPoints={setP2globalPoints}
          setWins={setWins}
          wins={wins}
        />
      </>
    </div>
  );
}

export default GamePage;
