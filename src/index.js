import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';

import App from './components/App';
import { Provider } from 'react-redux';

const theme = createTheme({});
ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>,
            <BrowserRouter>
                <App />
            </BrowserRouter>,
        </ThemeProvider>,
    </Provider>,
    document.getElementById('root')
);