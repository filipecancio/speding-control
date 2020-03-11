import React, { useState, useEffect } from "react";
import retrieve_trail_content, {
  axios_service
} from "../../services/pagina01.service";
import axios from "axios";
import CardWhite from "../../components/CardWhite";
import CardRow from "../../components/CardRow";

function Pagina01() {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const content = axios
        .get(`http://31.220.60.150:8001/contas`)
        .then(res => {
          const response = res.data;
          console.log(response);
          setData(response);
        });
    })();
  }, []);
  return (
    <>
      <CardWhite
        nome={data ? data.energia : "não foi"}
        saldo={data ? data.agua : "não foi"}
      />
      <CardRow />
    </>
  );
}

export default Pagina01;
