import React from "react";

import { Content } from "./styles";
import CardPurple from "../CardPurple";

function CardRow(props) {
  return (
    <>
      <Content>
        <CardPurple active text="Controle de gastos" />
        <CardPurple text="Desbloquear cartão" />
        <CardPurple text="Cobrar" />
      </Content>
    </>
  );
}

export default CardRow;
