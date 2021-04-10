// @packages
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// @scripts
import DashBoard from '../../pages/dashboard';
import Login from '../../pages/login';
import routes from './routes.json';

const componentMapper = {
    DashBoard,
    Login
};

const Routes = () => (
    <Switch>
        {Object.values(routes).map((route) => (
            <Route
                key={route.name}
                path={route.url}
                component={componentMapper[route.component]}
            />
        ))}
        <Redirect exact path="/" to="/dashboard" />
    </Switch>
);

export default Routes;
