import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCity } from '../actions';
import LocationList from '../components/LocationList';

class LocationListContainer extends Component {
	handleSelectedLocation = city => {
		console.log(`handleSelectedLocation ${city}`);

		this.props.setCity(city);
	};

	render() {
		return (
			<LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
		);
	};
}

/*
* NOTE
* Vincula react con redux
* el mapDispatchToProps alimenta al componente de los props que necesita que están mapeados
* en el actions
*/
const mapDispatchToProps = (dispatch) => ({
	setCity: (value) => dispatch(setCity(value))
});

LocationListContainer.propTypes = {
	setCity: PropTypes.func.isRequired,
	cities: PropTypes.array.isRequired
};

/*
* NOTE HIGHT ORDER COMPONENT
* Genera la conexión de el mapeo de props con actions y re-lanza el componente
* con los props obtenidos que este necesitará
*/
export default connect(null, mapDispatchToProps)(LocationListContainer);
