import React from "react";
import Forecast from "./Forecast";

const historyForecast = {
	title: "Forecast",
	component: Forecast
};

export default historyForecast;

const forecastItemList = [
	{ weekDay: "Domingo", hour: 6, state: "clear", temperature: 23 },
	{ weekDay: "Lunes", hour: 7, state: "clouds", temperature: 25 },
	{ weekDay: "Martes", hour: 8, state: "drizzle", temperature: 17 },
	{ weekDay: "Miércoles", hour: 9, state: "clouds", temperature: 19 },
	{ weekDay: "Jueves", hour: 10, state: "rain", temperature: 12 },
	{ weekDay: "Viernes", hour: 11, state: "rain", temperature: 12 },
	{ weekDay: "Sábado", hour: 12, state: "clouds", temperature: 15 }
];

export const ForecastExample = () => (
	<Forecast forecastItemList={forecastItemList} />
);
