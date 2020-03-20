import React from "react";
import { Content, Icon, Title, Subtitle, Information, Back } from "./styles";

function ErrorIcon(props) {
  return (
    <>
      <Content>
        <Title>Opsssss!</Title>
        <Subtitle>Alguma coisa está errada!</Subtitle>
        <Icon />
        <Information>
          Esse ainda não é o aplicativo do nubank mas poderá ser no futuro.
        </Information>
        <Back>Voltar para a trilha</Back>
      </Content>
    </>
  );
}

export default ErrorIcon;
