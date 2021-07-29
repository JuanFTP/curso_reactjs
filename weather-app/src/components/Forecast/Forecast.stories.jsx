import React from "react";
import Forecast from "./Forecast";

export default {
	title: "Forecast",
	component: Forecast,
};

const forecastItemList = [
	{ weekDay: "Domingo", hour: 6, state: "sunny", temperature: 23 },
	{ weekDay: "Lunes", hour: 7, state: "sunny", temperature: 25 },
	{ weekDay: "Martes", hour: 8, state: "cloudy", temperature: 17 },
	{ weekDay: "Miércoles", hour: 9, state: "rain", temperature: 19 },
	{ weekDay: "Jueves", hour: 10, state: "fog", temperature: 12 },
	{ weekDay: "Viernes", hour: 11, state: "fog", temperature: 12 },
	{ weekDay: "Sábado", hour: 12, state: "cloud", temperature: 15 },
];

export const ForecastExample = () => (
	<Forecast forecastItemList={forecastItemList} />
);
