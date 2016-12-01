/*jshint esversion: 6 */
import { ADD_PERSON } from '../actions/index';

export default function(state = [], action){
  switch (action.type) {
    case ADD_PERSON:
      return [...state, action.nombre]
    default:
      return state
  }
}