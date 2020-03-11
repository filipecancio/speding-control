import React from "react";
import Graph from "../../components/Graph";
import TitleGraph from "../../components/TitleGraph";
import BudgetRange from "../../components/BudgetRange";
import EnableNotifications from "../../components/EnableNotifications";
import { WhiteScreen } from "../../styles/elements/Tela";

function Pagina02() {
  return (
    <WhiteScreen>
      <TitleGraph />
      <Graph />
      <BudgetRange />
      <EnableNotifications />
    </WhiteScreen>
  );
}

export default Pagina02;
