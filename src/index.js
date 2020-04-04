import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './App.scss';
import { Provider } from "react-redux";
import store from "./core/Store";
import rootReducer from "./services/rootReducer";
import saga from "./services/saga";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./core/Routing/router";
import Login from "./components/Login";
import { isAuthenticated } from "./core/config/utils";

const storeMain = store.provideStore(rootReducer, saga);

let isAuth = isAuthenticated();

ReactDOM.render(
    <Provider store={storeMain}>
        <Router>
            <Switch>
                {isAuth ?
                    routes.map(route => <Route  {...route} />)
                    :
                    <Route path="/" component={Login} />
                }
            </Switch>
        </Router>
    </Provider>
    , document.getElementById("root"));