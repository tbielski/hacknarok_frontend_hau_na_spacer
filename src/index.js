import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './UI/App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';
import green from '@material-ui/core/colors/green';
import store from './ducks/store';
import {Provider} from 'react-redux';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: brown[400],
    },
    primary: {
      main: green[600],
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme} >
    <App />
    </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
