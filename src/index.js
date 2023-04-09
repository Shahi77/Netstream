import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';


import App from './components/App';

const theme = createTheme({});
ReactDOM.render(
    <ThemeProvider theme={theme}>,
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    </ThemeProvider>,
    document.getElementById('root')
);