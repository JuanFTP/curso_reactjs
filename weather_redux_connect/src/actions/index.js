import transformForecast from './../services/transformForecast';
import transformWeather from './../services/transformWeather';

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";
export const SET_WEATHER_CITY = "SET_WEATHER_CITY";

const setCity = (payload) => ({
	type: SET_CITY,
	payload
});

const setForecastData = (payload) => ({
	type: SET_FORECAST_DATA,
	payload
});

const getWeatherCity = (payload) => ({
	type: GET_WEATHER_CITY,
	payload
});

const setWeatherCity = (payload) => ({
	type: SET_WEATHER_CITY,
	payload
});

const api_key = "d3855f74ff7df3c088db301ff3a359cb";
const url = "http://api.openweathermap.org/data/2.5/forecast";
const url_weather = "http://api.openweathermap.org/data/2.5/weather";

/*
* NOTE uso del middleware thunk
*/
export const setSelectedCity = (payload) => {
	/*
	* NOTE segundo parámetro del middleware thunk
	* getState, retorna el estado actual de la aplicación
	*/
	return (dispatch, getState) => {
		const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

		// TODO Activar en el estado el indicador de búsqueda de datos
		dispatch(setCity(payload));

		// TODO Validar el timestamp de la petición
		const state = getState();
		const date = state.cities[payload] && state.cities[payload].forecastDataDate;

		const now = new Date();

		// NOTE Ahorro de datos en peticiones
		if (date && (now - date) < (1 * 60 * 1000)) {
			return;
		} else {
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
		}

	};
};

export const setWeather = (payload) => {
	return (dispatch) => {
		payload.forEach((city) => {
			dispatch(getWeatherCity(city));

			const api_weather = `${url_weather}?q=${city}&appid=${api_key}`;

			fetch(api_weather).then(data => {
				return data.json();
			}).then(weather_data => {
				const weather = transformWeather(weather_data);

				dispatch(setWeatherCity({ city, weather }));
			});
		});
	};
};
