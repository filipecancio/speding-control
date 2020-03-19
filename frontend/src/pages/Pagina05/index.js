import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorIcon from "../../components/ErrorIcon";
import HeaderLogo from "../../components/HeaderLogo";

function Pagina05() {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      axios
        .get(`https://us-central1-speding-control.cloudfunctions.net/api/pg05`)
        .then(res => {
          const response = res.data;
          console.log(response);
          setData(response);
        });
    })();
  }, []);
  return (
    <div>
      <HeaderLogo />
      <ErrorIcon />
    </div>
  );
}

export default Pagina05;
