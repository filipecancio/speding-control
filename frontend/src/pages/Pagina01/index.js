import React, { useState, useEffect } from "react";
import retrieve_trail_content from "../../services/pagina01.service";
import CardWhite from "../../components/CardWhite";
import CardRow from "../../components/CardRow";

function Pagina01() {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const content = await retrieve_trail_content();
      setData(content);
    })();
  }, []);
  return (
    <>
      <CardWhite
        nome={data ? data.Nome : "não foi"}
        saldo={data ? data.Saldo : "não foi"}
      />
      <CardRow />
    </>
  );
}

export default Pagina01;
