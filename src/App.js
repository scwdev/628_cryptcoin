import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import Currencies from "./Pages/currencies";
import Main from "./Pages/main";
import Price from "./Pages/price";
import Nav from "./Components/nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/currencies">
          <Currencies />
        </Route>
        <Route
          path="/price/:symbol"
          render={(routerProps) => {
            return <Price {...routerProps} />;
          }}
        />
      </Switch>
    </div>
  );
}
export default App;