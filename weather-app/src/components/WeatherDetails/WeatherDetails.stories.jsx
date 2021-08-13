import React from "react";
import WeatherDetails from "./WeatherDetails";

const historyWeatherDetails = {
	title: "WeatherDetails",
	component: WeatherDetails
};

export default historyWeatherDetails;

export const WeatherDetailsExample = () => {
	return <WeatherDetails humidity={10} wind={9} />;
};
