import React, { useState, useEffect } from "react";
import axios from "axios";
import BadgeTransaction from "../../components/BadgeTransaction";
import api from "./data.json";

function Pagina03() {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      axios
        .get(`https://us-central1-speding-control.cloudfunctions.net/api/pg03`)
        .then(res => {
          const response = res.data;
          setData(response[0]);
        });
    })();
  }, []);
  var temp = data ? data : api;
  return (
    <div>
      {temp.transations.map(element => (
        <BadgeTransaction
          categoria={element.categoria}
          nome={element.nome}
          valor={element.valor}
          data={element.data}
        />
      ))}
    </div>
  );
}

export default Pagina03;
