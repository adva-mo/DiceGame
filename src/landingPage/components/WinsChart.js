import React, { useEffect } from "react";
import "../components/winsCharts.css";

const LOCAL_STORAGE_KEY = "diceGame.wins";

function WinsChart({ wins, setWins }) {
  useEffect(() => {
    //*load wins chart once when the component rendered again
    const storedWins = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedWins) {
      setWins(storedWins);
    }
  }, [setWins]);

  return (
    <div className="wins-chart-container">
      <ul>Top-Winners</ul>
      <p id="winner-img">
        <img
          id="winner-img"
          src={require("../../utils/winner.png")}
          alt="winner-trophy"
        />
      </p>
      {Object.entries(wins).map(([winner, point]) => {
        return (
          <li>
            {winner}: &nbsp; <span>{point}</span>
          </li>
        );
      })}
    </div>
  );
}

export default WinsChart;
