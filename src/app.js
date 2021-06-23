import React from 'react';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';
// import './app.less';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { NavigationBarProvider } from './hooks/NavigationBarProvider';
import { AuthProvider } from './hooks/AuthProvider';
import { ClientProvider } from './hooks/ClientProvider';
import colors from './styles/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.pink,
    },
    secondary: {
      main: colors.dark_pink,
    },
    action: {
      disabledBackground: colors.light_pink,
    },
  },
});

const App = () =>{
    return (
      <AuthProvider>
        <ClientProvider>
          <ThemeProvider theme={theme}>
            <NavigationBarProvider>
              <BrowserRouter>
                <Routes />
              </BrowserRouter>
            </NavigationBarProvider>
          </ThemeProvider>
        </ClientProvider>
      </AuthProvider>
    );
}

export default App;