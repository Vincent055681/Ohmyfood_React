import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import {Routes} from "./config/routes";

const App = () => {
    return (
        <Router>
            <Switch>
                {Routes.map((route, index) => {
                    return <Route key={index} path={route.path} component={route.component} exact/>
                })}
            </Switch>
        </Router>
    );
};

export default App;
