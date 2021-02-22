import React from "react";
import ReactDOM from "react-dom";
import { store, history } from "./helpers";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { App } from "./app";
import "typeface-roboto";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
