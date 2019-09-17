import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-css-themr';

import { App } from './containers/App/App.jsx';
import { store } from './store/index';

render(
    <ThemeProvider>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);