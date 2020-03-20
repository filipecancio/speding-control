import React, { useState, useEffect } from "react";
import axios from "axios";
import SelectMonth from "../../components/SelectMonth";
import TotalTransaction from "../../components/TotalTransaction";
import Graph01 from "../../components/Graph01";
import AccountDetails from "../../components/AccountDetails";
import api from "./data.json";

function Pagina04() {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      axios
        .get(`https://us-central1-speding-control.cloudfunctions.net/api/pg04`)
        .then(res => {
          const response = res.data;
          setData(response[0]);
        });
    })();
  }, []);
  var temp = data ? data : api;
  return (
    <div>
      <AccountDetails agencia={temp.geral.agencia} conta={temp.geral.conta} />
      <SelectMonth />
      <TotalTransaction
        tipo={temp.transacao01.tipo}
        total={temp.transacao01.total}
        valor={temp.transacao01.valor}
      />
      <TotalTransaction
        tipo={temp.transacao01.tipo}
        total={temp.transacao01.total}
        valor={temp.transacao01.valor}
      />
      <Graph01 />
    </div>
  );
}

export default Pagina04;
