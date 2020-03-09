import React from "react";

import { Content } from "./styles";
import CardPurple from "../CardPurple";

function CardRow(props) {
  return (
    <>
      <Content>
        <CardPurple />
        <CardPurple />
        <CardPurple />
      </Content>
    </>
  );
}

export default CardRow;
