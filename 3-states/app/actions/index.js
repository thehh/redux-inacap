/*jshint esversion: 6 */
//1. agregamos normalizr
import { Schema, arrayOf } from 'normalizr';

//2. Creamos un Schema:
const cameraSchema = new Schema('cameras', { idAttribute: 'id' });


export const ADD_PERSON = 'ADD_PERSON';
export const SELECT_PERSON = 'SELECT_PERSON';

export function addPerson(nombre){
    return {
        type: 'ADD_PERSON',
        nombre
    };
}

export function selectPerson(nombre){
    return{
        type: 'SELECT_PERSON',
        nombre
    };
}