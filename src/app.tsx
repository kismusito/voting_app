import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard } from "./views";
import { createGlobalStyle } from "styled-components";

export function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/*" component={() => <div>Not found</div>} />
            </Switch>
        </React.Fragment>
    );
}

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto;
    }

    body {
        background-color: #f4f6fa;
    }
`;
