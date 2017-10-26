import React from 'react';
import ReactDom from 'react-dom';

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from './components/app.js';

const initialState = {
    stack: [],
};

function reducer(state = initialState, action) {
    console.log(state, action);

    const stackOp = (stackFunc) => ({
        ...state,
        stack: stackFunc(state.stack),
    });

    switch (action.type) {
        case 'clear': 
            return stackOp(() => []);
        case 'dup':{
            return stackOp(([a,...rest]) => [a, a, ...rest]);
        }
        case 'pop':{
            return stackOp(([a,...rest]) => [...rest]);
        }
        case 'pushValue':
            return stackOp(([...rest]) => [action.value, ...rest]);
        case 'stackOp':
            switch(action.operation){
                case 'add': {
                    return stackOp( ([a,b, ...rest]) => [a+b, ...rest] );
                }
                case 'subtract': {
                    return stackOp( ([a,b, ...rest]) => [a-b, ...rest] );
                }
                case 'multiply': {
                    return stackOp( ([a,b, ...rest]) => [a*b, ...rest] );
                }
                case 'divide': {
                    return stackOp( ([a,b, ...rest]) => [a/b, ...rest] );
                }
            }
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
