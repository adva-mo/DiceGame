import React, { useState } from "react";
import getRandom1to6 from "../../utils/utils";

function Cube({ numberOfCubes, setCurrent, setTotal }) {
  const [cubes, setCubes] = useState([]);

  const rollDiceHandler = () => {
    const cubes = [];
    for (let i = 0; i < numberOfCubes; i++) {
      const dice = getRandom1to6();
      cubes.push(dice);
      setCubes((prev) => [...cubes]);
    }
    updatePoints(cubes);
    console.log(setCurrent);
  };

  const updatePoints = (points) => {
    const pointsPerRound = points.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    setCurrent((prev) => prev + pointsPerRound);
  };
  return (
    <div className="flex-column">
      <div className="">
        <button id="roll-dice" onClick={rollDiceHandler}>
          roll dice
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
