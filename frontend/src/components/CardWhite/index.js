import React from "react";

import {
  Content,
  Top,
  Bottom,
  DataName,
  ArrowDown,
  Paragraph,
  Middle,
  Balance,
  Value,
  Icon,
  ArrowRight,
  IconPayment,
  Header,
  Account,
  IconNoSee,
  LogoNubank
} from "./styles";

function CardWhite(props) {
  const data = props;
  return (
    <>
      <Top>
        <LogoNubank>
          <DataName>{props.informacoes.usuario}</DataName>
        </LogoNubank>
        <ArrowDown />
      </Top>
      <Content>
        <Header>
          <IconPayment>
            <Account>Conta</Account>
          </IconPayment>
          <IconNoSee />
        </Header>
        <Middle>
          <Balance>Saldo disponivel</Balance>
          <Value>{props.informacoes.saldo_total}</Value>
        </Middle>
        <Bottom>
          <Icon />
          <Paragraph>{props.informacoes.ultima_tranferencia}</Paragraph>
          <ArrowRight />
        </Bottom>
      </Content>
    </>
  );
}

export default CardWhite;
