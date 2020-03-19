import React from "react";
import SelectMonth from "../../components/SelectMonth";
import TotalTransaction from "../../components/TotalTransaction";
import Graph01 from "../../components/Graph01";
import api from "./data.json";

function Pagina04() {
  return (
    <div>
      <h1>{api.value}</h1>
      <SelectMonth />
      <TotalTransaction tipo="ENTRADAS" total="5" valor="785,00" />
      <TotalTransaction tipo="SAÍDAS" total="12" valor="785,00" />
      <Graph01 />
    </div>
  );
}

export default Pagina04;
