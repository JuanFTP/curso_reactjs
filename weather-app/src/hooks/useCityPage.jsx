import { useState, useEffect } from "react";
import axios from 'axios';
import moment from "moment";
import "moment/locale/es";
import { getForecastUrl } from "./../utils/urls";
import getChartData from "../utils/transform/getChartData";
import getForecastItemList from "../utils/transform/getForecastItemList";

const useCityPage = (city, countryCode) => {
	const [chartData, setChartData] = useState(null);
	const [forecastItemList, setForecastItemList] = useState(null);

	useEffect(() => {
		const getForecast = async () => {
			const url = getForecastUrl({ city, countryCode });

			try {
				const { data } = await axios.get(url);
				const daysAhead = [0, 1, 2, 3, 4, 5];
				const days = daysAhead.map(d => moment().add(d, "d"));
				
				const dataAux = getChartData(days, data);
				const forecastItemListAux = getForecastItemList(days, data);

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
