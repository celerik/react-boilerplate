// @packages
import CssBaseline from '@material-ui/core/CssBaseline';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

// @scripts
import Routes from './config/routes';
import { store } from './core';

const App = () => (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <Routes />
      </BrowserRouter>
    </Provider>
);

export default App;
