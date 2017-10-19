import React from 'react';
import ReactDom from 'react-dom';

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from './components/app.js';

const initialState = {
    stack: [99, 108, 255],
};

function reducer(state=initialState, action) {
    console.log(state, action);

    switch (action.type) {
        case 'dup':
            return Object.assign(
                {},
                state,
                {
                    stack: [state.stack[0], ...state.stack],
                }
            );
    }

    return state;
}

const store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('main')
);