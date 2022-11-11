import React from "react";
import WinsChart from "./components/WinsChart";
import PlayerSelect from "./components/PlayerSelect";

import "./landingPage.css";

function LandingPage({ SetDisplayedPage, setNames }) {
  return (
    <div className="landing-page">
      <h1>welcome to the dice game!</h1>
      <div className="main-content flex-row">
        <WinsChart />
        <PlayerSelect SetDisplayedPage={SetDisplayedPage} setNames={setNames} />
      </div>
    </div>
  );
}

export default LandingPage;
