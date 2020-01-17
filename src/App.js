import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import './App.css';

import Header from './common/header'
import Home from './home'
import CreateList from './createList'
import store from '../src/store/'

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
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/list/:action' component={CreateList} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
