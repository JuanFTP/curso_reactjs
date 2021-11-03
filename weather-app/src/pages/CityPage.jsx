import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import useCityPage from "./../hooks/useCityPage";
import AppFrame from "../components/AppFrame";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CityInfo from "./../components/CityInfo";
import Weather from "./../components/Weather";
import WeatherDetails from "./../components/WeatherDetails";
import ForecastChart from "./../components/ForecastChart";
import Forecast from "./../components/Forecast";
import LinearProgress from "@material-ui/core/LinearProgress";
import useCityList from "./../hooks/useCityList";
import { getCityCode } from "./../utils/utils";
import { getCountryCodeNameByCountryCode } from "./../utils/serviceCities";

const CityPage = ({ onSetAllWeather, allWeather }) => {
	const { city, countryCode } = useParams();
	const { chartData, forecastItemList } = useCityPage(city, countryCode);
	const cities = useMemo(() => ([{ city, countryCode }]), [city, countryCode]);
	useCityList(cities, onSetAllWeather);
	const weather = allWeather[getCityCode(city, countryCode)];

	const humidity = weather && weather.humidity;
	const wind = weather && weather.wind;
	const country = getCountryCodeNameByCountryCode(countryCode);
	const state = weather && weather.state;
	const temperature = weather && weather.temperature;

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
							country={country}
							temperature={temperature}
						/>
					</Grid>

					<Grid item container justifyContent="center" xs={12}>
						<Weather state={state} temperature={temperature} />
						{
							humidity && wind && <WeatherDetails humidity={humidity} wind={wind} />
						}
					</Grid>

					<Grid item xs={12} className="loader">
						{
							!chartData && !forecastItemList && <LinearProgress></LinearProgress>
						}
					</Grid>

					<Grid item xs={12}>
						{
							chartData && <ForecastChart data={chartData} />
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
