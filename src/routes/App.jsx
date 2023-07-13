import React from 'react';
import '../styles/components/app.css';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={} />
                <Route exact path="/chackout" component={} />
                <Route exact path="/checkout/info" component={} />
                <Route exact path="/checkout/payment" component={} />
                <Route exact path="/checkout/success" component={} />
            </Switch>
        </BrowserRouter>
    )
}

export { App }


