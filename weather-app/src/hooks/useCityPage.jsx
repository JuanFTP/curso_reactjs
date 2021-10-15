import { useState, useEffect } from "react";
import axios from 'axios';
import moment from "moment";
import "moment/locale/es";
import { getForecastUrl } from "./../utils/urls";
import { tempToCelsius } from './../utils/utils';

const useCityPage = (city, countryCode) => {
	const [chartData, setChartData] = useState(null);
	const [forecastItemList, setForecastItemList] = useState(null);

	useEffect(() => {
		const getForecast = async () => {
			const url = getForecastUrl({ city, countryCode });

			try {
				const getDataOfDay = (chartData, day) => {
					return chartData.list.filter(item => {
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
					const temps_min = dayData.map(item => tempToCelsius(item.main.temp_min));
					const temps_max = dayData.map(item => tempToCelsius(item.main.temp_max));

					return ({
						dayHour: day.format("ddd"),
						min: temps_min.length > 0 ? Math.min(...temps_min) : 0, // Desestructura el array y extrae cada item
						max: temps_max.length > 0 ? Math.max(...temps_max) : 0
					});
				});

				// Generar arreglo para el pronóstico extendido más gráfico y diferente al del curso
				const forecastItemListAux = days.map(day => {
					const dayData = getDataOfDay(data, day);
					const temps = dayData.map(item => tempToCelsius(item.main.temp));

					return ({
						weekDay: day.format("dddd"),
						hour: dayData.length > 0 ? moment.unix(dayData[0].dt).hour() : 0,
						state: dayData.length > 0 ? dayData[0].weather[0].main.toLowerCase() : "clear",
						temperature: temps.length > 0 ? temps[0] : 0
					});
				});

				setChartData(dataAux);
				setForecastItemList(forecastItemListAux);
			} catch (error) {
				console.log("Ocurrió un error");
			}
		};

		getForecast();
	}, [city, countryCode]);

	return { chartData, forecastItemList };
};

export default useCityPage;
