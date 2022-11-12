import React, { useState } from "react";
import getRandom1to6 from "../../utils/utils";

function Cube({
  numberOfCubes,
  setp1turn,
  setTotalPoints,
  setCurrentPoints,
  currentPoints,
  setP2totalPoints,
  setP1totalPoints,
  target,
  setRound,
  totalPoints,
  setWins,
  wins,
  p1turn,
  setP1globalPoints,
  setP2globalPoints,
  names,
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
    setTotalPoints((prev) => prev + currentPoints);
    setCurrentPoints((prev) => 0);
    setp1turn((prev) => !prev);
  };

  const newRound = () => {
    setCurrentPoints((prev) => 0);
    setP1totalPoints((prev) => 0);
    setP2totalPoints((prev) => 0);
    setRound((prev) => prev + 1);
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
    setWins(...wins);
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
    setWins(...wins);
  };

  return (
    <div className="flex-column">
      <div className="">
        <button id="roll-dice" onClick={rollDiceHandler}>
          roll dice
        </button>
        <button id="hold" onClick={holdHandler}>
          hold
        </button>
        <button id="new-game" onClick={newRound}>
          new game
        </button>
      </div>
      <div className="flex-row">
        {cubes.map((number, i) => {
          return (
            <>
              <img
                key={i}
                src={require(`../../utils/Dice_Game_Starter/dice-${number}.png`)}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cube;
