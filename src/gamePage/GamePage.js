import React, { useState } from "react";
import Player from "./components/Player";
import ButtonsWraper from "./components/ButtonsWraper";

import "./gamePage.css";
import Cube from "./components/Cube";

function GamePage({ SetDisplayedPage }) {
  const [p1current, setP1current] = useState(0);
  const [p2current, setP2current] = useState(0);
  const [p1total, setP1total] = useState(0);
  const [p2total, setP2total] = useState(0);

  const [currentPlayer, setCurrentPlayer] = useState(null);

  const app = {
    player1: { name: "player 1", total: p1total, current: p1current },
    player2: { name: "player 2", total: p2total, current: p2current },
  };

  const numberOfCubes = 2;
  const target = 100;

  return (
    <>
      <div className="flex-row">
        <Player key={"p1"} {...app.player1} />
        <ButtonsWraper SetDisplayedPage={SetDisplayedPage} />
        <Player key={"p2"} {...app.player2} />
      </div>
      <div className="cubes-container flex-row">
        <Cube
          currentPlayer={currentPlayer ? "player1" : "player2"}
          setCurrentPlayer={setCurrentPlayer}
          numberOfCubes={numberOfCubes}
          setCurrent={!currentPlayer ? setP1current : setP2current}
          setTotal={!currentPlayer ? setP1total : setP2total}
        />
      </div>
    </>
  );
}

export default GamePage;
