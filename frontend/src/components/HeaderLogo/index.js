import React from "react";
import { Header, LogoNubank, NameAccount, ArrowDown } from "./styles";

function HeaderLogo(props) {
  return (
    <>
      <Header>
        <LogoNubank />
        <NameAccount>Joao Pedro</NameAccount>
      </Header>
      <ArrowDown />
    </>
  );
}

export default HeaderLogo;
