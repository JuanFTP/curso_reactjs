import React from "react";
import ForecastChart from "./ForecastChart";

export default {
	title: "ForecastChart",
	component: ForecastChart,
};
/*
	Día y hora "DDD-HH"
	Tres posiciones para el día y dos para la hora
	min: Temperatura mínima
	max: Temperatura máxima
*/
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

export const ForecastChartExample = () => <ForecastChart data={data} />;
