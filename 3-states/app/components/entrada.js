import React from 'react';
import ReactDOM from 'react-dom';

export default class  Entrada extends React.Component{

constructor(props){
	super(props);
	this.state = {nombre : '', apellido : ''}
	//La siguiente línea se necesita para que en el método onFormSubmit
	//"this" se reconozca como esta instancia de la clase.
	this.onFormSubmit = this.onFormSubmit.bind(this);
}

	onFormSubmit(event) {
	//para que no ejecute la acción submit de html
    event.preventDefault();
    //los props pueden ser funciones. Aquí llamo a la función
    //que viene como prop "crearNombre", con un objeto creado a partir del state
    //que refleja lo ingresado en los inputs.
    this.props.crearNombre({nombre : this.state.nombre, apellido : this.state.apellido});
    //limpio los inputs despues de llamar la funcion crear nombre.
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
