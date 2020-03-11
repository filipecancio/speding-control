import React from "react";
import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";

import Pagina01 from "./pages/Pagina01";
import Pagina02 from "./pages/Pagina02";
import Pagina03 from "./pages/Pagina03";
import Pagina04 from "./pages/Pagina04";
import { Tela } from "./styles/elements/Tela";

const Router = () => (
  <Routes>
    <Switch>
      <Route path="/" exact>
        <Tela>
          <Pagina01 />
        </Tela>
      </Route>
      <Route path="/2" exact>
        <Tela blancked>
          <Pagina02 />
        </Tela>
      </Route>
      <Route path="/3" exact>
        <Tela>
          <Pagina03 />
        </Tela>
      </Route>
      <Route path="/4" exact>
        <Tela>
          <Pagina04 />
        </Tela>
      </Route>
    </Switch>
  </Routes>
);

export default Router;
