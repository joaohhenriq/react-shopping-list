import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import './App.css';

import Header from './common/header'
import Home from './home'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#20232a'
    },
    secondary: {
      main: '#61dafb'
    }
  }
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
