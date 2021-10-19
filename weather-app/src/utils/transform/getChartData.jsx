import getDataOfDay from "./getDataOfDay";
import { tempToCelsius } from './../utils';
import "moment/locale/es";

const getChartData = (days, data) => days.map(day => {
	const dayData = getDataOfDay(data, day);
	const temps_min = dayData.map(item => tempToCelsius(item.main.temp_min));
	const temps_max = dayData.map(item => tempToCelsius(item.main.temp_max));

	return ({
		dayHour: day.format("ddd"),
		min: temps_min.length > 0 ? Math.min(...temps_min) : 0, // Desestructura el array y extrae cada item
		max: temps_max.length > 0 ? Math.max(...temps_max) : 0
	});
});

export default getChartData;
