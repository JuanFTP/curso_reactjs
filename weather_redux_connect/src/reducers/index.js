import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { cities, getForecastDataFromCity as _getForecastDataFromCity, getWeatherCities as _getWeatherCities } from './cities';
import { city } from './city';

export default combineReducers({
	city,
	cities
});

/*
* NOTE selectores
*/
export const getCity = createSelector(state => state.city, city => city);

/*
* NOTE _getForecastDataFromCity
* Se abstrae la función y llama a la función original para
* detonar la función original con solo lo necesario.
*/
export const getForecastDataFromCity = createSelector(state => state.cities, getCity, _getForecastDataFromCity);

export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);
