import './App.css';
import * as React from 'react';
import {Fragment} from 'react';
import Bar from './components/Bar';
import Message from './components/Message';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00529B',
    },
    secondary: {
      main: '#BDE5F8',
    },
    error: {
      main: '#b71c1c',
    },
    warning: {
      main: '#ffab40',
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Bar/>
        <Message/>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
