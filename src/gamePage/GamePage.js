import React, { useState } from "react";
import Player from "./components/Player";
import ButtonsWraper from "./components/ButtonsWraper";

import "./gamePage.css";
import Cube from "./components/Cube";

function GamePage({ SetDisplayedPage, setp1turn, p1turn, target, setRound }) {
  const [p1currentPoints, setP1currentPoints] = useState(0);
  const [p2currentPoints, setP2currentPoints] = useState(0);
  const [p1totalPoints, setP1totalPoints] = useState(0);
  const [p2totalPoints, setP2totalPoints] = useState(0);

  const app = {
    player1: {
      name: "player 1",
      totalPoints: p1totalPoints,
      currentPoints: p1currentPoints,
    },
    player2: {
      name: "player 2",
      totalPoints: p2totalPoints,
      currentPoints: p2currentPoints,
    },
  };

  const numberOfCubes = 2;

  return (
    <>
      {/* {(setP1totalPoints((prev) => 0), setP2totalPoints((prev) => 0))} */}
      <div className="flex-row">
        <Player key={"p1"} {...app.player1} setp1turn={setp1turn} />
        <ButtonsWraper SetDisplayedPage={SetDisplayedPage} />
        <Player key={"p2"} {...app.player2} setp1turn={setp1turn} />
      </div>
      <div className="cubes-container flex-row">
        <Cube
          {...(p1turn ? app.player1 : app.player2)}
          numberOfCubes={numberOfCubes}
          target={target}
          p1turn={p1turn}
          setp1turn={setp1turn}
          setP1totalPoints={setP1totalPoints}
          setP2totalPoints={setP2totalPoints}
          setCurrentPoints={p1turn ? setP1currentPoints : setP2currentPoints}
          setTotalPoints={p1turn ? setP1totalPoints : setP2totalPoints}
          totalPoints={p1turn ? p1totalPoints : p2totalPoints}
          setRound={setRound}
        />
      </div>
    </>
  );
}

export default GamePage;
