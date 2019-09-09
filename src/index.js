import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import App from './containers/App/App.jsx';
import { store } from './store/index';

console.log(store.getState());

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);