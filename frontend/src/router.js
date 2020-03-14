import React from "react";
import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";

import Pagina01 from "./pages/Pagina01";
import Pagina02 from "./pages/Pagina02";
import Pagina03 from "./pages/Pagina03";
import Pagina04 from "./pages/Pagina04";
import Pagina05 from "./pages/Pagina05";
import AppBar from "./components/AppBar";
import TopBar from "./components/TopBar";
import { Tela } from "./styles/elements/Tela";

const Router = () => (
  <Routes>
    <Switch>
      <Route path="/" exact>
        <Tela>
          <TopBar />
          <Pagina01 />
          <AppBar />
        </Tela>
      </Route>
      <Route path="/2" exact>
        <Tela blancked>
          <TopBar />
          <Pagina02 />
          <AppBar />
        </Tela>
      </Route>
      <Route path="/3" exact>
        <Tela blancked>
          <TopBar />
          <Pagina03 />
          <AppBar />
        </Tela>
      </Route>
      <Route path="/4" exact>
        <Tela>
          <TopBar />
          <Pagina04 />
          <AppBar />
        </Tela>
      </Route>
      <Route path="/5" exact>
        <Tela blancked>
          <TopBar />
          <Pagina05 />
          <AppBar />
        </Tela>
      </Route>
    </Switch>
  </Routes>
);

export default Router;
