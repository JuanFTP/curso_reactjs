import React from "react";
import Weather from "./Weather";

export default {
	title: "Weather",
	component: Weather,
};

export const WeatherSunny = () => <Weather temperature={28} state="sunny" />;

export const WeatherCloud = () => <Weather temperature={15} state="cloud" />;
