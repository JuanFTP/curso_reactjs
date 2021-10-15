import React from "react";
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

const CityPage = () => {
	const { city, countryCode } = useParams();
	const { chartData, forecastItemList } = useCityPage(city, countryCode);

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
