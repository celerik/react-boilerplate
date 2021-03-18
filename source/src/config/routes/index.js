//@packages
import React from "react";
import { Route, Switch } from "react-router-dom";

//@scripts
import DashBoard from '../../pages/dashboard';
import Login from '../../pages/login';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={DashBoard} />
            <Route exact path='/login' component={Login} />
        </Switch>
    );
};

export default Routes;