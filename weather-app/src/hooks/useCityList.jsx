import { useState, useEffect } from "react";
import axios from 'axios';
import { getWeatherUrl } from "./../utils/urls";
import getAllWeather from "./../utils/transform/getAllWeather";

const useCityList = (cities, onSetAllWeather) => {
	/*
		Estructura que esperamos tenga allWeather
		{
			[Bogotá-Colombia]: {temperature: 10, state="sunny"},
			[Ciudad de México-México]: {temperature: 10, state="sunny"}
			[Formosa-Argentina]: {temperature: 10, state="sunny"}
		}
	*/

	const [error, setError] = useState();

	useEffect(() => {
		const setWeather = async (city, countryCode) => {
			const url = getWeatherUrl({ city, countryCode });

			try {
				const response = await axios.get(url);
				const allWeatherAux = getAllWeather(response, city, countryCode);
				//setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux }));
				onSetAllWeather(allWeatherAux);
			} catch (error) {
				if (error.response) { // Errores que nos responde el server
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
	}, [cities, onSetAllWeather]);

	return { error, setError };
}

export default useCityList;
