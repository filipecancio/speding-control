import React from "react";
import Graph from "../../components/Graph";
import TitleGraph from "../../components/TitleGraph";
import BudgetRange from "../../components/BudgetRange";
import ButtonBack from "../../components/ButtonBack";
import EnableNotifications from "../../components/EnableNotifications";
import api from "./data.json";

function Pagina02() {
  return (
    <div>
      <ButtonBack />
      <TitleGraph />
      <Graph />
      <BudgetRange />
      <EnableNotifications />
    </div>
  );
}

export default Pagina02;
