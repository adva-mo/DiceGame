import React, { useState, useEffect } from "react";
import LandingPage from "./landingPage/LandingPage";
import GampePage from "./gamePage/GamePage";
import "./utils/utils.css";
import "./App.css";

function App() {
  const [displayedPage, SetDisplayedPage] = useState(null);
  const [p1turn, setp1turn] = useState(true);
  const [wins, setWins] = useState({});

  const [names, setNames] = useState({
    player1: null,
    player2: null,
    target: null,
    numberOfCubes: null,
  });

  return (
    <>
      {displayedPage ? (
        <GampePage
          names={Object.values(names)}
          SetDisplayedPage={SetDisplayedPage}
          p1turn={p1turn}
          setp1turn={setp1turn}
          target={names[2]}
          numberOfCubes={names.numberOfCubes}
          setWins={setWins}
          wins={wins}
        />
      ) : (
        <LandingPage
          SetDisplayedPage={SetDisplayedPage}
          setNames={setNames}
          setWins={setWins}
          wins={wins}
        />
      )}
    </>
  );
}

export default App;
