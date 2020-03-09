import React from "react";
import Colors from "./styles/settings/Colors";
import Reset from "./styles/generics/Reset";
import Base from "./styles/elements/Base";
import Router from "./router";
import { Tela } from "./styles/elements/Tela";

function App() {
  return (
    <>
      <Reset />
      <Base />
      <Colors />
      <Tela>
        <Router />
      </Tela>
    </>
  );
}

export default App;
