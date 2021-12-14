import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
/*
* NOTE actions import for default form
*/
// import { setSelectedCity, setWeather } from './../actions';
/*
* NOTE actions import for bindActionCreators
*/
import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

	componentDidMount() {
		const { setWeather, setSelectedCity, cities, city } = this.props;

		setWeather(cities);
		setSelectedCity(city);
	}

	handleSelectedLocation = city => {
		console.log(`handleSelectedLocation ${city}`);

		this.props.setSelectedCity(city);
	};

	render() {
		return (
			<LocationList cities={this.props.citiesWeather} onSelectedLocation={this.handleSelectedLocation}></LocationList>
		);
	};
}

/*
* NOTE
* Vincula react con redux
* el mapDispatchToProps alimenta al componente de los props que necesita que están mapeados
* en el actions
* NOTE actions use for default form
*/
/* const mapDispatchToProps = (dispatch) => ({
	setCity: (value) => dispatch(setSelectedCity(value)),
	setWeather: (cities) => dispatch(setWeather(cities))
}); */

/*
* NOTE actions use for default form bindActionCreators
* Ayuda a importar todas las acciones, esto sirve para mantener nombres
* pero su contra es que importa todos y no siempre es necesario
*/
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

const mapStateToProps = (state) => ({
	citiesWeather: getWeatherCities(state),
	city: getCity(state)
});

LocationListContainer.propTypes = {
	setSelectedCity: PropTypes.func.isRequired,
	setWeather: PropTypes.func.isRequired,
	cities: PropTypes.array.isRequired,
	citiesWeather: PropTypes.array,
	city: PropTypes.string.isRequired
};

/*
* NOTE HIGHT ORDER COMPONENT
* Genera la conexión de el mapeo de props con actions y re-lanza el componente
* con los props obtenidos que este necesitará
*/
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
