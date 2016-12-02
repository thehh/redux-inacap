/*jshint esversion:6 */
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { personApp } from '../reducers/index';
import ReactDOM from 'react-dom';
import Principal from './principal';

//const store = createStore(personApp)
const store = createStore(personApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store} >
        <Principal />
    </Provider>,
    document.getElementById('container')
);