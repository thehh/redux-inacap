import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import 'react-widgets/lib/less/react-widgets.less';
import DropdownList from 'react-widgets/lib/DropdownList';
import {Saludo,Despedida, SaludosTotales} from './saludos'
import Entrada from './entrada'




export default class ComponentePrincipal extends React.Component{
  constructor(props){
    super(props);
    this.state = {nombres: nombres};
  }

  componentWillMount(){
    console.log('Before mount...');
  }

  componentDidMount(){
    console.log('After mount...')
  }

  render1(){
    return <div>
    <SaludosTotales nombre="Juan"/>
    {//<Despedida nombre = "Juan"/>
}
    </div>
  }

  render(){
  	return (
    <div>
​     <DropdownList data = {this.state.nombres} textField = 'nombre'
          onChange={value => this.setState({personaSeleccionada : value})} />
      <SaludosTotales vato = {this.state.personaSeleccionada}/>

      <Entrada crearNombre= { persona => this.setState({nombres : [...this.state.nombres, persona]})}/>
  	</div>)
  }
}

const nombres = [
{id:1, nombre : "Juan", apellido : "Pérez"},
{id:2, nombre : "Pedro", apellido : "González" }]

