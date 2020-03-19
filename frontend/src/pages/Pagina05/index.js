import React from "react";
import ErrorIcon from "../../components/ErrorIcon";
import api from "./data.json";

function Pagina05() {
  return (
    <div>
      <h1>{api.value}</h1>
      <h1>Opssss</h1>
      <h2>Alguma coisa está errada</h2>
      <ErrorIcon />
      <h1>Esse ainda não é o aplicativo do nubank mas poderá ser no futuro.</h1>
      <button>VOLTAR PARA A TRILHA</button>
    </div>
  );
}

export default Pagina05;
