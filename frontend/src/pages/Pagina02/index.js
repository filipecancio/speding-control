import React, { useState, useEffect } from "react";
import axios from "axios";
import Graph from "../../components/Graph";
import TitleGraph from "../../components/TitleGraph";
import BudgetRange from "../../components/BudgetRange";
import ButtonBack from "../../components/ButtonBack";
import EnableNotifications from "../../components/EnableNotifications";
import api from "./data.json";

function Pagina02() {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      axios
        .get(`https://us-central1-speding-control.cloudfunctions.net/api/pg02`)
        .then(res => {
          const response = res.data;
          console.log(response);
          setData(response);
        });
    })();
  }, []);
  return (
    <div>
      <h1>{api.value}</h1>
      <ButtonBack />
      <TitleGraph />
      <Graph />
      <BudgetRange />
      <EnableNotifications />
    </div>
  );
}

export default Pagina02;
