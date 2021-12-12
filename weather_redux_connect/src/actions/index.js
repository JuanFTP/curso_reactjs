import transformForecast from './../services/transformForecast';

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

export const setCity = (payload) => ({
	type: SET_CITY,
	payload
});

export const setForecastData = (payload) => ({
	type: SET_FORECAST_DATA,
	payload
})

const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openweathermap.org/data/2.5/forecast";

/*
* NOTE uso del middleware thunk
*/
export const setSelectedCity = (payload) => {
	return dispatch => {
		const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

		// TODO Activar en el estado el indicador de búsqueda de datos
		dispatch(setCity(payload));

		return fetch(url_forecast).then(
			data => (data.json())
		).then(
			(weather_data) => {
				const forecastData = transformForecast(weather_data);
				
				// TODO Modificar estado con el responde de la promise (fetch)
				dispatch(setForecastData({
					city: payload,
					forecastData
				}));
			}
		);
	};
};
