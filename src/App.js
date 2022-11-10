import React, { useState } from "react";
import LandingPage from "./landingPage/LandingPage";
import GampePage from "./gamePage/GamePage";
import "./utils/utils.css";
import "./App.css";

function App() {
  const [displayedPage, SetDisplayedPage] = useState(null);

  return (
    <>
      {displayedPage ? (
        <GampePage SetDisplayedPage={SetDisplayedPage} />
      ) : (
        <LandingPage SetDisplayedPage={SetDisplayedPage} />
      )}
    </>
  );
}

export default App;
