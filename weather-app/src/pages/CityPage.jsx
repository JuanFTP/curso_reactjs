import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import AppFrame from "../components/AppFrame";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CityInfo from "./../components/CityInfo";
import Weather from "./../components/Weather";
import WeatherDetails from "./../components/WeatherDetails";
import ForecastChart from "./../components/ForecastChart";
import Forecast from "./../components/Forecast";
import moment from "moment";
import "moment/locale/es";
import convertUnits from "convert-units";

const CityPage = () => {
	const [data, setData] = useState(null);
	const [forecastItemList, setForecastItemList] = useState(null);
	const { city, countryCode } = useParams();

	useEffect(() => {
		const getForecast = async () => {
			const appId = "d3855f74ff7df3c088db301ff3a359cb";
			const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appId}`;

			try {
				const toCelsius = (temp) => Number(convertUnits(temp).from('K').to('C').toFixed(0));
				const getDataOfDay = (data, day) => {
					return data.list.filter(item => {
						const dayOfYear = moment.unix(item.dt).dayOfYear();
						return dayOfYear === day.dayOfYear();
					})
				};

				const { data } = await axios.get(url);
				const daysAhead = [0, 1, 2, 3, 4, 5];
				const days = daysAhead.map(d => moment().add(d, "d"));

				// Generar arreglo de datos para el gráfico
				const dataAux = days.map(day => {
					const dayData = getDataOfDay(data, day);
					const temps_min = dayData.map(item => toCelsius(item.main.temp_min));
					const temps_max = dayData.map(item => toCelsius(item.main.temp_max));

					return ({
						dayHour: day.format("ddd"),
						min: temps_min.length > 0 ? Math.min(...temps_min) : 0, // Desestructura el array y extrae cada item
						max: temps_max.length > 0 ? Math.max(...temps_max) : 0
					});
				});

				// Generar arreglo para el pronóstico extendido más gráfico y diferente al del curso
				const forecastItemListAux = days.map(day => {
					const dayData = getDataOfDay(data, day);
					const temps = dayData.map(item => toCelsius(item.main.temp));

					return ({
						weekDay: day.format("dddd"),
						hour: dayData.length > 0 ? moment.unix(dayData[0].dt).hour() : 0,
						state: dayData.length > 0 ? dayData[0].weather[0].main.toLowerCase() : "clear",
						temperature: temps.length > 0 ? temps[0] : 0
					});
				});

				setData(dataAux);
				setForecastItemList(forecastItemListAux);
			} catch (error) {
				console.log("Ocurrió un error");
			}
		};

		getForecast();
	}, [city, countryCode]);

	// Valores globales de la ciudad en el momento actual, por obtener del API
	const state = "clouds";
	const temperature = 20;
	const humidity = 80;
	const wind = 5;

	return (
		<AppFrame>
			<Paper elevation={1} className="mt mb pt pb">
				<Grid container justifyContent="space-around" direction="column">
					<Grid
						item
						container
						justifyContent="center"
						alignItems="flex-end"
						xs={12}
					>
						<CityInfo
							city={city}
							country={countryCode}
							temperature={temperature}
						/>
					</Grid>

					<Grid item container justifyContent="center" xs={12}>
						<Weather state={state} temperature={temperature} />
						<WeatherDetails humidity={humidity} wind={wind} />
					</Grid>

					<Grid item xs={12}>
						{
							data && <ForecastChart data={data} />
						}
					</Grid>

					<Grid item xs={12}>
						{
							forecastItemList && <Forecast forecastItemList={forecastItemList} />
						}
					</Grid>
				</Grid>
			</Paper>
		</AppFrame>
	);
};

export default CityPage;
