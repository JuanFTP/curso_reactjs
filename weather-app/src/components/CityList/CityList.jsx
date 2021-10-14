import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import convertUnits from 'convert-units';
import Alert from '@material-ui/lab/Alert';
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CityInfo from "./../CityInfo";
import Weather from "./../Weather";

const getCityCode = (city, countryCode) => `${city}-${countryCode}`;

// renderCityAndCountry se va a converir en una función que retorna otra función
const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry, weather) => {
	const { city, countryCode, country } = cityAndCountry;

	return (
		<ListItem
			button
			key={getCityCode(city, countryCode)}
			onClick={() => eventOnClickCity(city, countryCode)}
		>
			<Grid container justifyContent="center" alignItems="center">
				<Grid item md={9} xs={12}>
					<CityInfo city={city} country={country} />
				</Grid>
				<Grid item md={3} xs={12}>
					<Weather temperature={weather && weather.temperature} state={weather && weather.state} />
				</Grid>
			</Grid>
		</ListItem>
	);
};

// cities: es un array, y en cada item tiene que tener la ciudad pero además, el country
const CityList = ({ cities, onClickCity }) => {
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
			const apiKey = "d3855f74ff7df3c088db301ff3a359cb";
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`;

			try {
				const response = await axios.get(url);

				const { data } = response;
				const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0));
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

	return (
		<div>
			{
				error && <Alert severity="error" onClose={() => setError(null)}>{error}</Alert>
			}
			<List>
				{
					cities.map((cityAndCountry) => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
				}
			</List>
		</div>
	);
};

CityList.propTypes = {
	cities: PropTypes.arrayOf(
		PropTypes.shape({
			city: PropTypes.string.isRequired,
			country: PropTypes.string.isRequired,
			countryCode: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	onClickCity: PropTypes.func.isRequired
};

export default CityList;
