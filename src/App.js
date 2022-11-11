import React, { useState } from "react";
import LandingPage from "./landingPage/LandingPage";
import GampePage from "./gamePage/GamePage";
import "./utils/utils.css";
import "./App.css";

function App() {
  const [displayedPage, SetDisplayedPage] = useState(null);
  const [p1turn, setp1turn] = useState(true);
  // const [round, setRound] = useState(0);
  // const round = 0;

  return (
    <>
      {displayedPage ? (
        <GampePage
          SetDisplayedPage={SetDisplayedPage}
          p1turn={p1turn}
          setp1turn={setp1turn}
        />
      ) : (
        <LandingPage SetDisplayedPage={SetDisplayedPage} />
      )}
    </>
  );
}

export default App;
