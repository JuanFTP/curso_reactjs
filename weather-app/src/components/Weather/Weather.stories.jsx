import React from "react";
import Weather from "./Weather";

export default {
	title: "Weather",
	component: Weather,
	argsType: {
		temperature: {
			control: {
				type: "text"
			}
		},
		state: {
			control: {
				type: "text"
			}
		}
	}
};

const Template = (args) => <Weather {...args} />;

export const WeatherCloud = Template.bind({});
WeatherCloud.args = { temperature: 28, state: "clear" };

export const WeatherSunny = Template.bind({});
WeatherSunny.args = { temperature: 15, state: "clouds" };
