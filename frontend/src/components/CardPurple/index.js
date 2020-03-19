import React from "react";

import { Content, Icon } from "./styles";

function CardPurple(props) {
  return (
    <>
      <Content active={props.active}>
        <Icon nome="cadeado" />
        {props.text}
      </Content>
    </>
  );
}

export default CardPurple;
