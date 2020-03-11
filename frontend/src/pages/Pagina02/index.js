import React from "react";
import Graph from "../../components/Graph";
import TitleGraph from "../../components/TitleGraph";
import BudgetRange from "../../components/BudgetRange";
import EnableNotifications from "../../components/EnableNotifications";

function Pagina02() {
  return (
    <>
      <TitleGraph />
      <Graph />
      <BudgetRange />
      <EnableNotifications />
    </>
  );
}

export default Pagina02;
