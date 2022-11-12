import React, { useEffect } from "react";
const LOCAL_STORAGE_KEY = "diceGame.wins";

function WinsChart({ wins, setWins }) {
  // console.log(wins);
  // let isLSfull = false;

  useEffect(() => {
    //*load wins chart once when the component rendered again
    const storedWins = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log(storedWins);
    if (storedWins) {
      setWins(storedWins);
      // isLSfull = true;
    }
  }, []);

  return (
    <div className="wins-chart-container">
      <ul>Winners:</ul>
      <p id="winner-img">
        <img
          id="winner-img"
          src={require("../../utils/Dice_Game_Starter/winner.png")}
          alt="winner-trophy"
        />
      </p>
      {Object.entries(wins).map(([winner, point]) => {
        return (
          <li>
            {winner}: {point}
          </li>
        );
      })}
    </div>
  );
}

export default WinsChart;
