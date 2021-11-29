import React from "react";
import "typeface-roboto";
import CityInfo from "./CityInfo";

export default {
	title: "CityInfo",
	component: CityInfo,
	argsType: {
		city: {
			control: {
				type: "text"
			}
		},
		country: {
			control: {
				type: "text"
			}
		}
	}
};

const Template = (args) => <CityInfo {...args}/>

export const CityExample = Template.bind({});
CityExample.args = {city: "Buenos Aires", country: "Argentina"};