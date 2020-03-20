import React from "react";

import { Content } from "./styles";
import CardPurple from "../CardPurple";

function CardRow(props) {
  return (
    <>
      <Content operacoes={props.operacoes}>
        {props.operacoes.map(element => {
          return (
            <CardPurple
              active={element.active}
              text={element.text}
              nome={element.nome}
            />
          );
        })}
      </Content>
    </>
  );
}

export default CardRow;
