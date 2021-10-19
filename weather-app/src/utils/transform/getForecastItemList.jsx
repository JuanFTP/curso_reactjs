import getDataOfDay from "./getDataOfDay";
import { tempToCelsius } from './../utils';
import moment from "moment";
import "moment/locale/es";

const getForecastItemList = (days, data) => days.map(day => {
	const dayData = getDataOfDay(data, day);
	const temps = dayData.map(item => tempToCelsius(item.main.temp));

	return ({
		weekDay: day.format("dddd"),
		hour: dayData.length > 0 ? moment.unix(dayData[0].dt).hour() : 0,
		state: dayData.length > 0 ? dayData[0].weather[0].main.toLowerCase() : "clear",
		temperature: temps.length > 0 ? temps[0] : 0
	});
});

export default getForecastItemList;
