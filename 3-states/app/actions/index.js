/*jshint esversion: 6 */
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