import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ForecastItem from '../ForecastItem';
import { validValues } from './../IconState';

const renderForecastItem = forecast => {
	const { weekDay, hour, state, temperature } = forecast;
	// Hay que poner un identificador único
	// Vamos a poner una marca para encontrar cada item del ForecastItem
	// data-testid="forecast-item-container"
	return (
		<Grid data-testid="forecast-item-container" item key={`${weekDay}${hour}`}>
			<ForecastItem weekDay={weekDay} hour={hour} state={state} temperature={temperature} />
		</Grid>
	);
};

const Forecast = ({ forecastItemList }) => {
	return (
		<Grid container
			justify="center"
			alignItems="center">
			{forecastItemList.map(forecast => renderForecastItem(forecast))}
		</Grid>
	);
}

/*
	forecastItemList es un array de elementos
	los elementos deben tener una estructura determinada
	así como las siguientes propiedades:
	weekDay: PropTypes.string.isRequired,
	hour: PropTypes.number.isRequired,
	state: PropTypes.oneOf(validValues).isRequired,
	temperature: PropTypes.number.irRequired
*/
Forecast.propTypes = {
	forecastItemList: PropTypes.arrayOf(PropTypes.shape({
		weekDay: PropTypes.string.isRequired,
		hour: PropTypes.number.isRequired,
		state: PropTypes.oneOf(validValues).isRequired,
		temperature: PropTypes.number.isRequired
	}).isRequired).isRequired
}

export default Forecast;
