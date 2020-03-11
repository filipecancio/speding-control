import React from "react";
import BadgeTransaction from "../../components/BadgeTransaction";

function Pagina03() {
  return (
    <>
      <BadgeTransaction
        categoria="Restaurante"
        nome="Outback Steak House"
        valor="93,25"
        data="03 MAR"
      />
      <BadgeTransaction
        categoria="Restaurante"
        nome="Padaria Estrela Guia"
        valor="17,30"
        data="09 MAR"
      />
      <BadgeTransaction
        categoria="Restaurante"
        nome="Pizza Hut"
        valor="40,85"
        data="13  MAR"
      />
    </>
  );
}

export default Pagina03;
