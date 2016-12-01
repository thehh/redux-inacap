/*jshint esversion: 6 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
//0. importamos redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//1. importamos la accion
import { addPerson } from '../actions/index';

class Entrada extends Component{

    constructor(props){
        super(props);
        this.state = {nombre : '', apellido : ''}
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.addPerson({nombre : this.state.nombre});
    }

    render() {
        //1. Agregamos la accion
        const {addPerson} = this.props;
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type='text'
                    placeholder='nombre'
                    value={this.state.nombre}
                    onChange={ e => this.setState({ nombre: e.target.value, evento : e })}
                />
                <input type = 'text'
                    placeholder = 'apellido'
                    value={this.state.apellido}
                    onChange={ e => this.setState({ apellido: e.target.value})}
                />
                <button type="submit"> Agregar</button>
            </form>
        )
    }
}

Entrada.propTypes = {
    addPerson: PropTypes.func
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addPerson
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Entrada)
