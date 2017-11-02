import React from 'react';
import ReactDom from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from './reducers/rootReducer';

import App from './components/app.js';

const store = createStore(rootReducer);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('main')
);
