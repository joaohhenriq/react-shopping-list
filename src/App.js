import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import AppBar from '@material-ui/core/AppBar'
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#282c34'
    },
    secondary: {
      main: '#61dafb'
    }
  }
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position='static' color='primary'>
        <div className='header'>
          <p className='title'>Shopping List</p>
        </div>
      </AppBar>
      <div className="App">
        <h1>Test</h1>
      </div>

    </MuiThemeProvider>
  );
}

export default App;
