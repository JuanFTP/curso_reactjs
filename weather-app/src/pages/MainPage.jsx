import React from "react";
import { useHistory } from "react-router-dom";
import AppFrame from "./../components/AppFrame";
import CityList from "./../components/CityList";
import Paper from "@material-ui/core/Paper";

const MainPage = () => {
	const history = useHistory();
	const onClickHandler = (city, countryCode) => {
		// history.push permite alterar la URL del navegador por programación
		history.push(`/city/${countryCode}/${city}`);
	};

	const cities = [
		{ city: "San Andrés Tuxtla", country: "México", countryCode: "MX" },
		{ city: "Ciudad de México", country: "México", countryCode: "MX" },
		{ city: "Formosa", country: "Argentina", countryCode: "AR" },
		{ city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
		{ city: "Bogotá", country: "Colombia", countryCode: "CO" },
		{ city: "Madrid", country: "España", countryCode: "ES" },
		{ city: "Sonora", country: "México", countryCode: "MX" }
	];

	return (
		<AppFrame>
			<Paper elevation={1} className="mt mb pl pr">
				<CityList
					cities={cities}
					onClickCity={onClickHandler}
				></CityList>
			</Paper>
		</AppFrame>
	);
};

export default MainPage;
