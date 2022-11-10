import React from "react";
// import roll

function ButtonsWraper({ SetDisplayedPage }) {
  const backToChartHandler = () => {
    SetDisplayedPage((perv) => null);
  };

  return (
    <>
      <button id="back-to-chart" onClick={backToChartHandler}>
        back to chart
      </button>
    </>
  );
}

export default ButtonsWraper;
