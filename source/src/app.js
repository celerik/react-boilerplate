// @packages
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from './pages/dashboard'
import React from "react";
import { Provider } from 'react-redux';

// @scripts
import { store } from './core';

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline/>
          <Dashboard/>
    </Provider>
  );
}

export default App;
