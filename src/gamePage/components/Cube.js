import React, { useState } from "react";
import getRandom1to6 from "../../utils/utils";

function Cube({
  numberOfCubes,
  setp1turn,
  setTotalPoints,
  setCurrentPoints,
  currentPoints,
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
    setCurrentPoints((prev) => prev + pointsPerRound);
  };

  const holdHandler = () => {
    if (currentPoints === 0) return;
    setTotalPoints((prev) => prev + currentPoints);
    setCurrentPoints((prev) => 0);
    setp1turn((prev) => !prev);
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
        {cubes.map((number) => {
          return <p>{number}</p>;
        })}
      </div>
    </div>
  );
}

export default Cube;
