import React from "react";
import {
  Content,
  IconTransaction,
  Type,
  TotalTransaction,
  TotalEntry,
  TotalOut
} from "./styles";

function TotalTransacion(props) {
  return (
    <>
      <Content>
        <Type>{props.tipo}</Type>
        <IconTransaction>
          <TotalTransaction>{props.total}</TotalTransaction>
          <TotalEntry>{props.valor}</TotalEntry>
          <TotalOut>{props.valor}</TotalOut>
        </IconTransaction>
      </Content>
    </>
  );
}

export default TotalTransacion;
