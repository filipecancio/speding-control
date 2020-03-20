import React from "react";

import { Content, IconLock } from "./styles";

function CardPurple(props) {
  return (
    <>
      <Content active={props.active}>
        <IconLock nome={props.nome} />
        {props.text}
      </Content>
    </>
  );
}

export default CardPurple;
