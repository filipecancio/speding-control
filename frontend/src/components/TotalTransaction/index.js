import React from "react";
import { Content, Icon } from "./styles";

function TotalTransacion(props) {
  return (
    <>
      <h1>{props.tipo}</h1>
      <h1>{props.total}</h1>
      <h1>{props.valor}</h1>
    </>
  );
}

export default TotalTransacion;
