// @packages
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// @scripts
import DashBoard from '../../pages/dashboard';
import Login from '../../pages/login';
import routes from '.';

const componentMapper = {
    DashBoard,
    Login
};

const Routes = () => (
    <Switch>
        {Object.entries(routes).map(([, route]) => (
            <Route
                key={route.name}
                exact
                path={route.url}
                component={componentMapper[route.component]}
            />
        ))}
    </Switch>
);

export default Routes;
