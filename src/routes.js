import React from "react";
import Mainlayout from "./components/layouts/MainLayout.js";
import Pagination from "./components/common/Pagination.js";
import Demo from "./pages/home/components/Demo.js"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Routes=()=>{
    return(
    <Router>
        <Switch>
            <Mainlayout>
                <Switch>
                    <Route path="/" component={Demo}>
                    </Route>
                </Switch>
            </Mainlayout>
        </Switch>
    </Router>
    )

}
export default Routes