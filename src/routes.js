import React from "react";
import Mainlayout from "./components/layouts/MainLayout.js";
import Demo from "./pages/home"
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
const Routes = () => {
    return(
    <Router>
      <Switch>
        <Mainlayout>
          <Switch>
            <Route path="/" component={Demo}/>
            <Route path="/product/:id" component={Demo}/>
          </Switch>
        </Mainlayout>
      </Switch>
    </Router>
    )

}
export default Routes