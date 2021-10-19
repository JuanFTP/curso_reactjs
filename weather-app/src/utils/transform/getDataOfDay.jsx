import moment from "moment";
import "moment/locale/es";

const getDataOfDay = (allData, day) => {
	return allData.list.filter(item => {
		const dayOfYear = moment.unix(item.dt).dayOfYear();
		return dayOfYear === day.dayOfYear();
	})
};

export default getDataOfDay;