import React from 'react';
import ForecastItem from './ForecastItem';

export default {
	title: "ForecastItem",
	component: ForecastItem
};

export const lunesSoleado = () => {
	return <ForecastItem weekDay={"Lunes"} hour={10} state={"sunny"} temperature="23"></ForecastItem>;
};

export const martesLluvioso = () => {
	return <ForecastItem weekDay={"Martes"} hour={19} state={"rain"} temperature="18"></ForecastItem>;
};

export const miercolesNublado = () => {
	return <ForecastItem weekDay={"Martes"} hour={15} state={"cloudy"} temperature="15"></ForecastItem>;
};

export const juevesNubladisimo = () => {
	return <ForecastItem weekDay={"Martes"} hour={8} state={"cloud"} temperature="12"></ForecastItem>;
};

export const viernesBrumoso = () => {
	return <ForecastItem weekDay={"Martes"} hour={14} state={"fog"} temperature="21"></ForecastItem>;
};