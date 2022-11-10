import React from "react";
import WinsChart from "./components/WinsChart";
import PlayerSelect from "./components/PlayerSelect";

import "./landingPage.css";

function LandingPage({ SetDisplayedPage }) {
  const handlePlayButton = () => {
    SetDisplayedPage((prev) => "game-page");
  };

  return (
    <div className="landing-page">
      <h1>welcome to the dice game!</h1>
      <div className="main-content flex-row">
        <WinsChart />
        <PlayerSelect />
      </div>
      <footer>
        <button onClick={handlePlayButton}>Play!</button>
      </footer>
    </div>
  );
}

export default LandingPage;
