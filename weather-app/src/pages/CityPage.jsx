import React from "react";
import AppFrame from "../components/AppFrame";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CityInfo from "./../components/CityInfo";
import Weather from "./../components/Weather";
import WeatherDetails from "./../components/WeatherDetails";
import ForecastChart from "./../components/ForecastChart";
import Forecast from "./../components/Forecast";

const CityPage = () => {
	const city = "Buenos Aires";
	const country = "Argentina";
	const state = "cloudy";
	const temperature = 20;
	const humidity = 80;
	const wind = 5;
	const data = [
		{
			dayHour: "Jue 18",
			min: 14,
			max: 22,
		},
		{
			dayHour: "Vie 06",
			min: 18,
			max: 27,
		},
		{
			dayHour: "Vie 12",
			min: 14,
			max: 21,
		},
		{
			dayHour: "Vie 18",
			min: 11,
			max: 14,
		},
		{
			dayHour: "Sab 00",
			min: 17,
			max: 28,
		},
	];
	const forecastItemList = [
		{ weekDay: "Domingo", hour: 6, state: "sunny", temperature: 23 },
		{ weekDay: "Lunes", hour: 7, state: "sunny", temperature: 25 },
		{ weekDay: "Martes", hour: 8, state: "cloudy", temperature: 17 },
		{ weekDay: "Miércoles", hour: 9, state: "rain", temperature: 19 },
		{ weekDay: "Jueves", hour: 10, state: "fog", temperature: 12 },
		{ weekDay: "Viernes", hour: 11, state: "fog", temperature: 12 },
		{ weekDay: "Sábado", hour: 12, state: "cloud", temperature: 15 },
	];

	return (
		<AppFrame>
			<Paper elevation={4}>
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
						<WeatherDetails humidity={humidity} wind={wind} />
					</Grid>

					<Grid item xs={12}>
						<ForecastChart data={data} />
					</Grid>

					<Grid item xs={12}>
						<Forecast forecastItemList={forecastItemList} />
					</Grid>
				</Grid>
			</Paper>
		</AppFrame>
	);
};

export default CityPage;
