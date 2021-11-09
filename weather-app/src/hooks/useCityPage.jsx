import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import moment from "moment";
import "moment/locale/es";
import { getForecastUrl } from "./../utils/urls";
import getChartData from "../utils/transform/getChartData";
import getForecastItemList from "../utils/transform/getForecastItemList";
import { getCityCode } from "./../utils/utils";

const useCityPage = (allChartData, allForecastItemList, actions) => {
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
				
				actions({
					type: "SET_CHART_DATA",
					payload: {
						[cityCode]: dataAux
					}
				});
				
				const forecastItemListAux = getForecastItemList(days, data);

				actions({
					type: "SET_FORECAST_ITEM_LIST",
					payload: {
						[cityCode]: forecastItemListAux
					}
				});
			} catch (error) {
				console.log("Ocurrió un error");
			}
		};

		if((allChartData && allForecastItemList) && !allChartData[cityCode] && !allForecastItemList[cityCode]) {
			getForecast();
		}
	}, [city, countryCode, cityCode, actions, allChartData, allForecastItemList]);

	return { city, countryCode };
};

export default useCityPage;
