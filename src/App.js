import React, { useState, useEffect } from "react";
import LandingPage from "./landingPage/LandingPage";
import GampePage from "./gamePage/GamePage";
import "./utils/utils.css";
import "./App.css";

function App() {
  const [displayedPage, SetDisplayedPage] = useState(null);
  const [p1turn, setp1turn] = useState(true);
  const [round, setRound] = useState(0);
  const [wins, setWins] = useState({});
  // console.log(setWins);

  const LOCAL_STORAGE_KEY = "diceGame.wins";

  const [names, setNames] = useState({
    player1: null,
    player2: null,
    target: null,
    numberOfCubes: null,
  });

  useEffect(function loadWinsOnRefresh() {
    //*load wins chart once when the app is loaded/component rendered again
    const storedWins = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log(storedWins);
    if (storedWins) setWins(storedWins);
  }, []);

  // useEffect(
  //   function addWinToLocal() {
  //     //* add item to local storage every time an item is added to the 'wins' chart.
  //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wins));
  //   },
  //   [wins]
  // );

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
          setRound={setRound}
          setWins={setWins}
          wins={wins}
          // addWinToLocal={addWinToLocal}
        />
      ) : (
        <LandingPage
          SetDisplayedPage={SetDisplayedPage}
          setNames={setNames}
          // loadWinsOnRefresh={loadWinsOnRefresh}
        />
      )}
    </>
  );
}

export default App;
