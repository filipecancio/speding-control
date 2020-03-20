import React from "react";
import ButtonMonth from "../ButtonMonth";
import ButtonNext from "../ButtonNext";

import { Content, Months, SpotlightMonth } from "./styles";

function SelectMonth(props) {
  return (
    <>
      <Content>
        <ButtonMonth />
        <Months>Fevereiro</Months>
        <SpotlightMonth>Março</SpotlightMonth>
        <Months>Abril</Months>
        <ButtonNext />
      </Content>
    </>
  );
}

export default SelectMonth;
