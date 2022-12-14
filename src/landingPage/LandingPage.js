import React from "react";
import WinsChart from "./components/WinsChart";
import PlayerSelect from "./components/PlayerSelect";

import "./landingPage.css";

function LandingPage({
  SetDisplayedPage,
  setNames,
  loadWinsOnRefresh,
  wins,
  setWins,
}) {
  return (
    <div className="landing-page flex-column">
      <h1>Welcome to the dice game!</h1>
      <img id="cube-img" src={require("../utils/cube.png")} alt="dice" />
      <div className="main-content flex-row">
        <WinsChart
          loadWinsOnRefresh={loadWinsOnRefresh}
          wins={wins}
          setWins={setWins}
        />
        <PlayerSelect SetDisplayedPage={SetDisplayedPage} setNames={setNames} />
      </div>
    </div>
  );
}

export default LandingPage;
