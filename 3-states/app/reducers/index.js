/*jshint esversion: 6 */
import { combineReducers } from 'redux';
import personReducer from './person';
import selectedPersonReducer from './selectedPerson';

export const personApp = combineReducers({
    personReducer,
    selectedPersonReducer
});

export default personApp;