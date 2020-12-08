import '../fake-db';
import '../styles/_app.scss';
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import MatxTheme from './MatxLayout/MatxTheme/MatxTheme';
import AppContext from './appContext';
import history from 'history.js';

import routes from './RootRoutes';
import { Store } from './redux/Store';
import Auth from './auth/Auth';
import MatxLayout from './MatxLayout/MatxLayoutSFC';
import AuthGuard from './auth/AuthGuard';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { ClientProvider } from './clientContext';

const App = () => {
  return (
    <AppContext.Provider value={{ routes }}>
      <ClientProvider>
        <Provider store={Store}>
          <MatxTheme>
            <ThemeProvider theme={theme}>
              <Auth>
                <Router history={history}>
                  <AuthGuard>
                    <MatxLayout />
                  </AuthGuard>
                </Router>
              </Auth>
            </ThemeProvider>
          </MatxTheme>
        </Provider>
      </ClientProvider>
    </AppContext.Provider>
  );
};

export default App;
