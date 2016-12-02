/*jshint esversion: 6 */
import { SELECT_PERSON } from '../actions/index';

export default function(state = {}, action){
  switch (action.type) {
    case SELECT_PERSON:
      return {personaSeleccionada: action.nombre}
    default:
      return state
  }
}