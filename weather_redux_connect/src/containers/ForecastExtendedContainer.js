import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from './../components/ForecastExtended';
import { getForecastDataFromCity, getCity } from './../reducers';
import { connect } from 'react-redux';

class ForecastExtendedContainer extends Component {
	render() {
		const { city, forecastData } = this.props;

		return (
			this.props.city
			&&
			<ForecastExtended city={city} forecastData={forecastData} />
		);
	};
}

ForecastExtendedContainer.propTypes = {
	city: PropTypes.string.isRequired,
	forecastData: PropTypes.array
}

/*
* NOTE inyección de propiedades desde el estado global
* de la aplicación, la función recibe un estate y retorna
* las variables por nombre de acuerdo a lo que requiera
* el componente actual, dado que se puede desestructurar
* el estado que se recibe se puede obtener directamente
* city y como requerimos retornar city, y posee el mismo
* nombre, por ello se simplifica el retorno de la forma
* en que se muestra.
*/

/*
* connect(1, 2)(Comp)
* 1: MapStateToProps(values): recibe el state de la aplicación
* y retornamos un objeto con las propiedades del componente
*
* 2: MapDispatchToProps(func): retorna un objeto con funciones
* estos llaman al dispatch del actions y el action al type del 
* redux, estos permiten alterar el estado de la aplicación, una
* vez alterado el estado de la aplicación se genera una
* re-renderización.
*
* ambos se llaman en el componente como this.props.prop
*/

const mapStateToProps = (state) => ({ city: getCity(state), forecastData: getForecastDataFromCity(state) });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
