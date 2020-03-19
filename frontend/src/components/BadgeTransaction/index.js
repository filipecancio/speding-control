import React from "react";
import { Content, Icon, IconClose } from "./styles";

function BadgeTransaction(props) {
  return (
    <>
      <Content>
        <IconClose />
        <Icon />
        <div>
          <h1>{props.categoria}</h1>
          <h2>{props.nome}</h2>
          <h3>R${props.valor}</h3>
        </div>
        <p>{props.data}</p>
      </Content>
    </>
  );
}

export default BadgeTransaction;
