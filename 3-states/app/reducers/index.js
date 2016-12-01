/*jshint esversion: 6 */
import { combineReducers } from 'redux';
import person from './person';

const personApp = combineReducers({
    person
});

export default personApp;