import React from "react";
import ButtonBack from "../ButtonBack";
import ButtonNext from "../ButtonNext";

import { Content, Months, SpotlightMonth } from "./styles";

function SelectMonth(props) {
  return (
    <>
      <Content>
        <ButtonBack />
        <Months>Fevereiro</Months>
        <SpotlightMonth>Março</SpotlightMonth>
        <Months>Abril</Months>
        <ButtonNext />
      </Content>
    </>
  );
}

export default SelectMonth;
