import React from "react";

function getRandom1to6() {
  const a = 1 + Math.floor(Math.random() * 6);
  // const b = 1 + Math.floor(Math.random() * 6);
  return a;
}

export default getRandom1to6;
