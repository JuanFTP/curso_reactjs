import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import moment from "moment";
import "moment/locale/es";
import { getForecastUrl } from "./../utils/urls";
import getChartData from "../utils/transform/getChartData";
import getForecastItemList from "../utils/transform/getForecastItemList";
import { getCityCode } from "./../utils/utils";

const useCityPage = (allChartData, allForecastItemList, onSetChartData, onSetForecastItemList) => {
	const { city, countryCode } = useParams();
	const cityCode = getCityCode(city, countryCode);

	useEffect(() => {
		const getForecast = async () => {
			const url = getForecastUrl({ city, countryCode });

			try {
				const { data } = await axios.get(url);
				const daysAhead = [0, 1, 2, 3, 4, 5];
				const days = daysAhead.map(d => moment().add(d, "d"));
				
				const dataAux = getChartData(days, data);
				const forecastItemListAux = getForecastItemList(days, data);

				onSetChartData({ [cityCode]: dataAux });
				onSetForecastItemList({ [cityCode]: forecastItemListAux });
			} catch (error) {
				console.log("Ocurrió un error");
			}
		};

		if((allChartData && allForecastItemList) && !allChartData[cityCode] && !allForecastItemList[cityCode]) {
			getForecast();
		}
	}, [city, countryCode, allChartData, allForecastItemList, onSetChartData, onSetForecastItemList]);

	return { city, countryCode };
};

export default useCityPage;
