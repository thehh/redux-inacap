/*jshint esversion:6 */
import React from 'react';
import ReactDOM from 'react-dom';
import Principal from './principal';

//const store = createStore(reducer)
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Principal store={store}/>,
    document.getElementById('container')
);