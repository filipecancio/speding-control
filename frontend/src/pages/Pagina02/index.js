import React from "react";
import Graph from "../../components/Graph";
import TitleGraph from "../../components/TitleGraph";
import BudgetRange from "../../components/BudgetRange";
import ButtonBack from "../../components/ButtonBack";
import EnableNotifications from "../../components/EnableNotifications";

function Pagina02() {
  return (
    <div>
      <ButtonBack />
      <TitleGraph />
      <Graph />
      <BudgetRange />
      <EnableNotifications />
      <button>SALVAR</button>
    </div>
  );
}

export default Pagina02;
