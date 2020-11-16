import React from "react";
import Mainlayout from "./components/layouts/MainLayout.js";
import Home from "./pages/home"
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Detail from "./pages/details/index.js";
const Routes = () => {
    return(
    <Router>
      <Switch>
        <Mainlayout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/product/:id"render={(match) => (
              <Detail match={match}/>
              )} />
          </Switch>
        </Mainlayout>
      </Switch>
    </Router>
    )

}
export default Routes