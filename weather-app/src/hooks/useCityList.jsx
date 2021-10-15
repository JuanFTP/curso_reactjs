import { useState, useEffect } from "react";
import axios from 'axios';
import { getWeatherUrl } from "./../utils/urls";
import { getCityCode, tempToCelsius } from './../utils/utils';

const useCityList = (cities) => {
	/*
		Estructura que esperamos tenga allWeather
		{
			[Bogotá-Colombia]: {temperature: 10, state="sunny"},
			[Ciudad de México-México]: {temperature: 10, state="sunny"}
			[Formosa-Argentina]: {temperature: 10, state="sunny"}
		}
	*/
	const [allWeather, setAllWeather] = useState({});
	const [error, setError] = useState();

	useEffect(() => {
		const setWeather = async (city, countryCode) => {
			const url = getWeatherUrl({ city, countryCode });

			try {
				const response = await axios.get(url);

				const { data } = response;
				//const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0));
				const temperature = tempToCelsius(data.main.temp);
				const state = data.weather[0].main.toLowerCase();

				const propName = getCityCode(city, countryCode);
				const propValue = { temperature, state };

				//Se "desensambla" el objeto y se le "suman" lo nuevo
				//set[VARIABLE_ESTADO](VARIABLE_ESTADO => VARIABLE_ESTADO+1)
				setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }));
			} catch (error) {
				if (error.response) { // Errores que nos responde el server
					// const { data, status } = error.response;
					setError("Ha ocurrido un error en el servidor del clima");
				} else if (error.request) { // Errores que suceden por no llegar al server
					setError("Verifica tu conexión a internet");
				} else { // Errores imprevistos
					setError("Error al cargar los datos")
				}
			}
		};

		cities.forEach(({ city, countryCode }) => {
			setWeather(city, countryCode);
		});
	}, [cities]);

	return { allWeather, error, setError };
}

export default useCityList;
