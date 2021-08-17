import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CityInfo from "./../CityInfo";
import Weather from "./../Weather";

// renderCityAndCountry se va a converir en una función que retorna otra función
const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry, weather) => {
	const { city, country } = cityAndCountry;

	return (
		<ListItem button key={city} onClick={eventOnClickCity}>
			<Grid container justifyContent="center" alignItems="center">
				<Grid item md={9} xs={12}>
					<CityInfo city={city} country={country} />
				</Grid>
				<Grid item md={3} xs={12}>
					{
						weather ? (<Weather temperature={weather.temperature} state={weather.state} />) : "Sin información para mostrar"
					}
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
	useEffect(() => {
		const setWeather = (city, country) => {
			const apiKey = "d3855f74ff7df3c088db301ff3a359cb";
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

			axios.get(url)
				.then(response => {
					const { data } = response;
					const temperature = data.main.temp;
					const state = "sunny";

					const propName = [`${city}-${country}`];
					const propValue = { temperature, state };

					/*Se "desensambla" el objeto y se le "suman" lo nuevo*/
					/*set[VARIABLE_ESTADO](VARIABLE_ESTADO => VARIABLE_ESTADO+1)*/
					setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }));
				});
		};

		cities.forEach(({ city, country }) => {
			setWeather(city, country);
		});
	}, [cities]);

	return (
		<List>
			{
				cities.map((cityAndCountry) => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
			}
		</List>
	);
};

CityList.propTypes = {
	cities: PropTypes.arrayOf(
		PropTypes.shape({
			city: PropTypes.string.isRequired,
			country: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
	onClickCity: PropTypes.func.isRequired
};

export default CityList;
