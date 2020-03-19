import React from "react";
import {
  Content,
  RangeBase,
  RangeColored,
  BallRange,
  ValuesBalance,
  Values,
  ValueSelected
} from "./styles";

function BudgetRange(props) {
  return (
    <>
      <Content>
        <h1>Defina um orçamento para essa categoria:</h1>
        <ValuesBalance>
          <Values>R$ 50,00</Values>
          <Values>R$ 800,00</Values>
        </ValuesBalance>
        <RangeBase />
        <RangeColored />
        <BallRange />
        <ValueSelected>R$ 120,00 </ValueSelected>
      </Content>
    </>
  );
}

export default BudgetRange;
