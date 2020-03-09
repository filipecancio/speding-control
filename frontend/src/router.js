import React from "react";
import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";

import Pagina01 from "./pages/Pagina01";
import Pagina02 from "./pages/Pagina02";
import Pagina03 from "./pages/Pagina03";
import Pagina04 from "./pages/Pagina04";

const Router = () => (
  <Routes>
    <Switch>
      <Route path="/" component={Pagina01} exact />
      <Route path="/2" component={Pagina02} />
      <Route path="/3" component={Pagina03} />
      <Route path="/4" component={Pagina04} />
    </Switch>
  </Routes>
);

export default Router;
