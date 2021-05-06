// @packages
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';

// @scripts
import { StopsProvider } from './providers/stops';
import { store } from './core';
import { theme } from './styles/material-ui';
import CommonControls from './components/organisms/common-controls';
import Routes from './config/routes/routes';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <StopsProvider>
        <BrowserRouter>
          <CssBaseline />
          <Routes />
          <CommonControls />
        </BrowserRouter>
      </StopsProvider>
    </ThemeProvider>
  </Provider>
);

export default App;
