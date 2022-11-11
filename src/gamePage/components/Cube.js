import React, { useState } from "react";
import getRandom1to6 from "../../utils/utils";

function Cube({
  numberOfCubes,
  p1turn,
  setp1turn,
  setTotalPoints,
  setCurrentPoints,
  currentPoints,
  setP2totalPoints,
  setP1totalPoints,
  target,
  setRound,
  totalPoints,
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
    if (pointsPerRound === 12)
      console.log("6 double, empty current and switch turns");
    setCurrentPoints((prev) => prev + pointsPerRound);
  };

  const holdHandler = () => {
    if (currentPoints === 0) return;
    if (currentPoints + totalPoints > target) {
      console.log("you lost");
      newRound();
    } else if (currentPoints + totalPoints === target) {
      console.log("you win");
      newRound();
    }
    setTotalPoints((prev) => prev + currentPoints);
    setCurrentPoints((prev) => 0);
    setp1turn((prev) => !prev);
  };

  const newRound = () => {
    //!add points to local storge
    setCurrentPoints((prev) => 0);
    setP1totalPoints((prev) => 0);
    setP2totalPoints((prev) => 0);
    setRound((prev) => prev + 1);
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
      </div>
      <div className="flex-row">
        {cubes.map((number, i) => {
          return <p key={i}>{number}</p>;
        })}
      </div>
    </div>
  );
}

export default Cube;
