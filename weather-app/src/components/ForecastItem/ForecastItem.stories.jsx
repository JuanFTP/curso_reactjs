import React from "react";
import ForecastItem from "./ForecastItem";

const historyForecastItem = {
	title: "ForecastItem",
	component: ForecastItem
};

export default historyForecastItem;

export const lunesSoleado = () => {
	return (
		<ForecastItem
			weekDay={"Lunes"}
			hour={10}
			state={"clear"}
			temperature={23}
		></ForecastItem>
	);
};

export const martesLluvioso = () => {
	return (
		<ForecastItem
			weekDay={"Martes"}
			hour={19}
			state={"clouds"}
			temperature={18}
		></ForecastItem>
	);
};

export const miercolesNublado = () => {
	return (
		<ForecastItem
			weekDay={"Martes"}
			hour={15}
			state={"rain"}
			temperature={15}
		></ForecastItem>
	);
};

export const juevesNubladisimo = () => {
	return (
		<ForecastItem
			weekDay={"Martes"}
			hour={8}
			state={"snow"}
			temperature={12}
		></ForecastItem>
	);
};

export const viernesBrumoso = () => {
	return (
		<ForecastItem
			weekDay={"Martes"}
			hour={14}
			state={"snow"}
			temperature={21}
		></ForecastItem>
	);
};
