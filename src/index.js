import React from "react";
import ReactDOM from "react-dom";
import './App.scss';
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./core/Routing/router";
import storeMain from "./core/Store/store";
import "./App.scss"

ReactDOM.render(
    <Provider store={storeMain}>
        <Router>
            <Switch>
                {
                    routes.map(route => <Route  {...route} />)
                }
            </Switch>
        </Router>
    </Provider>
    , document.getElementById("root"));