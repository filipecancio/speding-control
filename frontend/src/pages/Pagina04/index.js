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
          console.log(response);
          setData(response);
        });
    })();
  }, []);
  return (
    <div>
      <AccountDetails agencia={api.geral.agencia} conta={api.geral.conta} />
      <SelectMonth />
      <TotalTransaction
        tipo={api.transacao01.tipo}
        total={api.transacao01.total}
        valor={api.transacao01.valor}
      />
      <TotalTransaction
        tipo={api.transacao01.tipo}
        total={api.transacao01.total}
        valor={api.transacao01.valor}
      />
      <Graph01 />
    </div>
  );
}

export default Pagina04;
