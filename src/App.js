import React from 'react';
import Main from './Main';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './styles/theme';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
