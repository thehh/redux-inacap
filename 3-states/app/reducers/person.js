/*jshint esversion: 6 */
import { connect } from 'react-redux';
import { addPerson } from '../actions/index';
import { ComponentePrincipal } from '../components/principal';

const personOps = (state, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        id: action.id,
        name: action.name
      }
    default:
      return state
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps =  ({
  onAddClick: addPerson
});

const person = connect(
  mapStateToProps,
  mapDispatchToProps
)(personList);

export default personOps;