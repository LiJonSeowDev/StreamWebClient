import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware, compose} from 'redux';


import App from './Component/App';
import allReducers from './Reducers';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    allReducers,
    composeEnhancers(applyMiddleware())
);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    ,
    document.querySelector('#root')
);

