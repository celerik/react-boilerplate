// @packages
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { Provider } from 'react-redux';

// @scripts
import Dashboard from './pages/dashboard';
import { store } from './core';

const App = () => (
    <Provider store={store}>
      <CssBaseline />
        <Dashboard />
    </Provider>
);

export default App;
