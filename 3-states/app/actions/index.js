/*jshint esversion: 6 */
//1. agregamos normalizr
import { Schema, arrayOf } from 'normalizr';

export const ADD_PERSON = 'ADD_PERSON';
export const SELECT_PERSON = 'SELECT_PERSON';

//2. Creamos un Schema:
const postSchema = new Schema('posts', { idAttribute: 'id' });
const postAuthorSchema = new Schema('postAuthors', { idAttribute: 'id' });
const commentSchema = new Schema('comments', { idAttribute: 'id' });
const commentAuthorSchema = new Schema('commentAuthors', { idAttribute: 'id' });

postSchema.define({
    author: postAuthorSchema,
    comments: arrayOf(commentSchema)
});


commentSchema.define({
    author: commentAuthorSchema
});

export function addPerson(nombre){
    return {
        type: 'ADD_PERSON',
        nombre
    };
}

export function selectPerson(persona){
    console.log('SELECT ACTION: ',persona)
    return{
        type: 'SELECT_PERSON',
        nombre: persona,
    };
}