import React, { useState, useEffect } from "react";
import axios from "axios";
import CardWhite from "../../components/CardWhite";
import CardRow from "../../components/CardRow";
import api from "./data.json";

function Pagina01() {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      axios
        .get(`https://us-central1-speding-control.cloudfunctions.net/api/pg01`)
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
      <CardWhite
        nome={data ? data.energia : "não foi"}
        saldo={data ? data.agua : "não foi"}
      />
      <CardRow />
    </div>
  );
}

export default Pagina01;
