import React, { useState } from "react";
import LandingPage from "./landingPage/LandingPage";
import GampePage from "./gamePage/GamePage";
import "./utils/utils.css";
import "./App.css";

function App() {
  const [displayedPage, SetDisplayedPage] = useState(null);
  const [p1turn, setp1turn] = useState(true);
  const [round, setRound] = useState(0);

  const target = 100;

  return (
    <>
      {displayedPage ? (
        <GampePage
          SetDisplayedPage={SetDisplayedPage}
          p1turn={p1turn}
          setp1turn={setp1turn}
          target={target}
          setRound={setRound}
        />
      ) : (
        <LandingPage SetDisplayedPage={SetDisplayedPage} />
      )}
    </>
  );
}

export default App;
