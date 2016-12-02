/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';

export const Saludo = (props) => (
    <div>Hola, {props.nombre}! Bienvenido</div>
)

export const Despedida = (props) => (
    <div>Adios, {props.nombre}</div>
)

export class SaludosTotales extends React.Component{
    constructor(props){
        super(props);
        this.state = {persona : props.vato}
    }

    componentWillReceiveProps(nextProps){
        console.log('props',this.props)
        console.log('nextProps', nextProps)
        this.setState({persona : nextProps.vato})
    }

    render(){
        if (this.state.persona == undefined)
            return(
                <div>
                    Nadie ha sido seleccionado.
                </div>
            )
        else
            return(
                <div>
                    <Saludo {...this.state.persona}/>
                    <Despedida {...this.state.persona}/>
                </div>
            )
    }
}