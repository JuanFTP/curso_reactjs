import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiDayRain } from 'react-icons/wi';
import { IconContext } from 'react-icons';

const validValues = [
	"cloud",
	"cloudy",
	"fog",
	"sunny",
	"rain"
];

const stateByName = {
	cloud: WiCloud,
	cloudy: WiDayCloudy,
	fog: WiDayFog,
	sunny: WiDaySunny,
	rain: WiDayRain
};

const renderState = state => {
	const Icon = stateByName[state] !== undefined ? stateByName[state] : stateByName["sunny"];
	return <Icon />
};

const Weather = ({ temperature, state }) => {
	return (
		<div>
			<IconContext.Provider value={{ size: '5em' }}>
				{renderState(state)}
			</IconContext.Provider>
			<Typography display="inline" variant={"h2"}>{temperature}</Typography>
		</div>
	);
};

Weather.propTypes = {
	temperature: PropTypes.number.isRequired,
	state: PropTypes.oneOf(validValues).isRequired
};

export default Weather;
