import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activo: false,
			legend: "Activar"
		};
	}

	estaActivo = () => {
		return this.state.activo ? " [Activo]" : " [No activo]";
	}

	onClickHandler = () => {
		if(this.state.activo) {
			this.setState({
				activo: false,
				legend: "Activar"
			});
		} else {
			this.setState({
				activo: true,
				legend: "Desactivar"
			});
		}
	}

	// Funciones del ciclo de vida [El componente se ha montado]
	componentDidMount() {
		console.log("El componente se ha montado");
	}

	// El componente se ha actualizado, se ejecuta despues de la segunda re-rederización
	componentDidUpdate(prevProps, prevState) {
		console.log("Estado previo", prevState.activo);
		console.log("Estado nuevo", this.state.activo);
		console.log("El componente se ha actualizado");
	}

	// El componente será removido
	componentWillUnmount() {
		console.log("El componente se ha des-montado");
	}

	render() {
		return (
			<div>
				<button onClick={this.onClickHandler}>{this.state.legend}</button>
				<br />
				<h1>
					{
						this.props.saludo
					}
					{
						this.estaActivo()
					}
				</h1>
			</div>
		);
	};
};
