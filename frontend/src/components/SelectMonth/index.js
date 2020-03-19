import React from "react";
import ButtonBack from "../ButtonBack";
import ButtonNext from "../ButtonNext";
import { Content } from "./styles";

function SelectMonth(props) {
  return (
    <>
      <Content>
        <ButtonBack />
        <h1>FEV</h1>
        <h1>MAR</h1>
        <h1>ABR</h1>
        <ButtonNext />
      </Content>
    </>
  );
}

export default SelectMonth;
