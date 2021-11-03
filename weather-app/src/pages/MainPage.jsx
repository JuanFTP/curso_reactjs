import React from "react";
import { useHistory } from "react-router-dom";
import AppFrame from "./../components/AppFrame";
import CityList from "./../components/CityList";
import Paper from "@material-ui/core/Paper";
import { getCities } from "./../utils/serviceCities";

const MainPage = ({ onSetAllWeather, allWeather }) => {
	const history = useHistory();
	const onClickHandler = (city, countryCode) => {
		// history.push permite alterar la URL del navegador por programación
		history.push(`/city/${countryCode}/${city}`);
	};

	return (
		<AppFrame>
			<Paper elevation={1} className="mt mb pl pr">
				<CityList
					allWeather={allWeather}
					onSetAllWeather={onSetAllWeather}
					cities={getCities()}
					onClickCity={onClickHandler}
				></CityList>
			</Paper>
		</AppFrame>
	);
};

export default MainPage;
