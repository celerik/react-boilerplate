// @packages
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';

// @scripts
import Routes from './config/routes/routes';
import { store } from './core';
import { theme } from './styles/material-ui';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
