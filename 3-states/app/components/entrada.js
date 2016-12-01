/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class  Entrada extends React.Component{

    constructor(props){
        super(props);
        this.state = {nombre : '', apellido : ''}
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.crearNombre({nombre : this.state.nombre, apellido : this.state.apellido});
        this.setState({
            nombre: '', apellido: ''
        })
    }

    render() {
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
