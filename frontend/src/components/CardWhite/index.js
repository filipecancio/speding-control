import React from "react";

import { Content, Top, Bottom, DataName,ArrowDown, Paragraph, Middle, Balance, Value, Icon, ArrowRight, IconPayment, Header,Account, IconNoSee, LogoNubank} from "./styles";

function CardWhite(props) {
  const data = props;
  return (
    <>
      <Top>
        <LogoNubank >
          <DataName>Joao Pedro</DataName>
        </LogoNubank>
          <ArrowDown />
         {/* <DataName>{data.nome}</DataName> 
          <DataBalance>{data.saldo}</DataBalance> */}
      </Top>
      <Content>
        <Header>
          <IconPayment>
            <Account>Conta</Account>
          </IconPayment>
          <IconNoSee/>
        </Header>
        <Middle>
          <Balance>Saldo disponivel</Balance>
          <Value>R$ 850,00</Value>
        </Middle>
        <Bottom>
          <Icon/>
          <Paragraph>Transferência de R$ 40,00 feita para Bruna Jullyeti de Jesus em 10 FEV 2020</Paragraph>
          <ArrowRight/>
        </Bottom>
      </Content>
    </>
  );
}

export default CardWhite;
