import React from "react";
import "typeface-roboto";
import CityInfo from "./CityInfo";

const historyCityInfo = {
	title: "CityInfo",
	component: CityInfo
};

export default historyCityInfo;

export const CityExample = () => (
	<CityInfo city={"Buenos Aires"} country={"Argentina"}></CityInfo>
);
