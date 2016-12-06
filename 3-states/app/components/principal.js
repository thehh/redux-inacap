/*jshint esversion: 6 */
import React, { Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import 'react-widgets/lib/less/react-widgets.less';
import DropdownList from 'react-widgets/lib/DropdownList';
import {Saludo,Despedida, SaludosTotales} from './saludos';
import Entrada from './entrada';
//0. importamos redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//1. importamos la accion
import { selectPerson } from '../actions/index';


class ComponentePrincipal extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        console.log('Before mount...');
    }

    componentDidMount(){
        console.log('After mount...');
    }

    render(){
        return (
            <div>
                <DropdownList data = {this.props.nombres} textField = 'nombre' onChange={value => this.props.selectPerson(value)} />
                <SaludosTotales vato = {this.props.personaSeleccionada}/>
                <Entrada crearNombre= { persona => this.setState({nombres : [...this.state.nombres, persona]})}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        nombres: state.personReducer,
        personaSeleccionada: state.selectedPersonReducer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectPerson
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentePrincipal)

