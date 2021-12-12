import { combineReducers } from 'redux';
import { cities, getForecastDataFromCity as _getForecastDataFromCity } from './cities';
import { city } from './city';

export default combineReducers({
	city,
	cities
});

/*
* NOTE selectores
*/
export const getCity = (state) => state.city;

/*
* NOTE _getForecastDataFromCity
* Se abstrae la función y llama a la función original para
* detonar la función original con solo lo necesario.
*/
export const getForecastDataFromCity = (state) => (_getForecastDataFromCity(state.cities, getCity(state)));
