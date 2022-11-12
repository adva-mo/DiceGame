import React, { useState, useEffect } from "react";
import getRandom1to6 from "../../utils/utils";

import "./cube.css";

const LOCAL_STORAGE_KEY = "diceGame.wins";

function Cube({
  numberOfCubes, //
  setp1turn, //
  setCurrentPoints, //
  currentPoints,
  setP2totalPoints, //
  setP1totalPoints, //
  target, //
  totalPoints,
  setWins, //
  wins, //
  p1turn, //
  setP1globalPoints, //
  setP2globalPoints, //
  names, //
}) {
  const [cubes, setCubes] = useState([]);

  const rollDiceHandler = () => {
    const cubes = [];
    for (let i = 0; i < numberOfCubes; i++) {
      const dice = getRandom1to6();
      cubes.push(dice);
      setCubes((prev) => [...cubes]);
    }
    displayCubes(cubes);
  };

  const displayCubes = (arrOfPoints) => {
    const pointsPerRound = arrOfPoints.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    if (arrOfPoints.every((val) => val === 6)) {
      console.log("6 double, empty current and switch turns");
      setCurrentPoints((prev) => 0);
      setp1turn((prev) => !prev);
      return;
    }
    setCurrentPoints((prev) => prev + pointsPerRound);
  };

  const holdHandler = () => {
    if (currentPoints === 0) return;
    if (currentPoints + totalPoints > target) {
      loosingHandle();
      newRound();
      return;
    } else if (currentPoints + totalPoints === target) {
      winningHandle();
      newRound();
      return;
    }
    p1turn
      ? setP1totalPoints((prev) => prev + currentPoints)
      : setP2totalPoints((prev) => prev + currentPoints);
    setCurrentPoints((prev) => 0);
    setp1turn((prev) => !prev);
  };

  const newRound = () => {
    setCurrentPoints((prev) => 0);
    setP1totalPoints((prev) => 0);
    setP2totalPoints((prev) => 0);
    // setRound((prev) => prev + 1);
  };

  const loosingHandle = () => {
    if (p1turn) {
      if (wins[names[1]]) wins[names[1]] += 1;
      else wins[names[1]] = 1;
      setP2globalPoints((prev) => prev + 1);
    } else {
      if (wins[names[0]]) wins[names[0]] += 1;
      else wins[names[0]] = 1;
      setP1globalPoints((prev) => prev + 1);
    }
    setWins({ ...wins });
  };
  const winningHandle = () => {
    if (p1turn) {
      if (wins[names[0]]) wins[names[0]] += 1;
      else wins[names[0]] = 1;
      setP2globalPoints((prev) => prev + 1);
    } else {
      if (wins[names[1]]) wins[names[1]] += 1;
      else wins[names[1]] = 1;
      setP1globalPoints((prev) => prev + 1);
    }
    setWins({ ...wins });
  };

  useEffect(
    function addWinToLocal() {
      //* add item to local storage every time an item is added to the 'wins' chart.
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wins));
    },
    [wins]
  );

  return (
    <div className="flex-column cube-game-play">
      <div className="button-wrapper flex-row">
        <button id="roll-dice" onClick={rollDiceHandler}>
          roll dice <i class="fa-solid fa-dice"></i>
        </button>
        <button id="hold" onClick={holdHandler}>
          hold <i class="fa-solid fa-hand-holding"></i>
        </button>
        <button id="new-game" onClick={newRound}>
          new game
        </button>
      </div>
      <div className="flex-row cubes-container">
        {cubes.map((number, i) => {
          return (
            <>
              <img
                className="dice-img"
                alt="dice"
                key={i}
                src={require(`../../utils/dice-${number}.png`)}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cube;
