import React from "react";
import Weather from "./Weather";

const historyWeather = {
	title: "Weather",
	component: Weather
};

export default historyWeather;

export const WeatherSunny = () => <Weather temperature={28} state="clear" />;

export const WeatherCloud = () => <Weather temperature={15} state="clouds" />;
