import React from "react";

import { Content, Top, Bottom } from "./styles";

function CardWhite(props) {
  const data = props;
  return (
    <>
      <Content>
        <Top>
          <h1>{data.nome}</h1>
          <h2>{data.saldo}</h2>
        </Top>
        <Bottom></Bottom>
      </Content>
    </>
  );
}

export default CardWhite;
