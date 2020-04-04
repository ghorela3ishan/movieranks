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

const storeMain = store.provideStore(rootReducer, saga);

let isAuth = true;

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