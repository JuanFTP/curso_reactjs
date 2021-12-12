import { SET_FORECAST_DATA } from './../actions';

export const cities = (state = {}, action) => {
	switch (action.type) {
		case SET_FORECAST_DATA:
			const { city, forecastData } = action.payload;
			return { ...state, [city]: { forecastData } };
		default:
			return state;
	}
};

/*
* NOTE selectores de estado
* Extrae solo la parte del estado que nos interesa
*/
 export const getForecastDataFromCity = (state, city) => state[city] && state[city].forecastData;
 