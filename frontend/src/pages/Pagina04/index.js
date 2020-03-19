import React, { useState, useEffect } from "react";
import axios from "axios";
import SelectMonth from "../../components/SelectMonth";
import TotalTransaction from "../../components/TotalTransaction";
import Graph01 from "../../components/Graph01";
import AccountDetails from "../../components/AccountDetails";

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
      <AccountDetails />
      <SelectMonth />
      <TotalTransaction tipo="ENTRADAS" total="5" valor="785,00" />
      <TotalTransaction tipo="SAÍDAS" total="12" valor="785,00" />
      <Graph01 />
    </div>
  );
}

export default Pagina04;
