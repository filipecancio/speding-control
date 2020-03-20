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
          setData(response);
        });
    })();
  }, []);
  return (
    <div>
      <CardWhite informacoes={api.geral} />
      <CardRow operacoes={api.operacoes} />
    </div>
  );
}

export default Pagina01;
