import React, { useRef } from "react";

function PlayerSelect({ SetDisplayedPage, setNames }) {
  const name1 = useRef("");
  const name2 = useRef("");
  const target = useRef("");
  const numberOfCubes = useRef("");

  const handlePlayButton = (e) => {
    e.preventDefault();
    setNames({
      player1: name1.current.value || "player 1",
      player12: name2.current.value || "player 2",
      target: Number(target.current.value) || 100,
      numberOfCubes: Number(numberOfCubes.current.value) || 2,
    });
    SetDisplayedPage((prev) => "game-page");
  };

  return (
    <div className="game-settings-form ">
      <form className="settings-form flex-column">
        <label>player 1 name</label>
        <input ref={name1} type="text"></input>
        <label>player 2 name</label>
        <input ref={name2} type="text"></input>
        <label>choose target</label>
        <input
          type="number"
          name="target"
          id="target"
          min="100"
          max="1000"
          step="100"
          ref={target}
        />
        <label>choose number of cubes</label>
        <input
          type="number"
          name="cubes"
          id="cubes"
          min="2"
          max="10"
          step="1"
          ref={numberOfCubes}
        />
        <button id="play" onClick={handlePlayButton}>
          Play!
        </button>
      </form>
    </div>
  );
}

export default PlayerSelect;
