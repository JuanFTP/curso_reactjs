import React from "react";
import { useHistory } from "react-router-dom";
import AppFrame from "./../components/AppFrame";
import CityList from "./../components/CityList";
import Paper from "@material-ui/core/Paper";

const MainPage = () => {
	const history = useHistory();
	const onClickHandler = () => {
		// history.push permite alterar la URL del navegador por programación
		history.push("/city");
	};

	const cities = [
		{ city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
		{ city: "Bogotá", country: "Colombia", countryCode: "CO" },
		{ city: "Madrid", country: "España", countryCode: "ES" },
		{ city: "Ciudad de México", country: "México", countryCode: "MX" },
	];

	return (
		<AppFrame>
			<br></br>
			<Paper elevation={4}>
				<CityList
					cities={cities}
					onClickCity={onClickHandler}
				></CityList>
			</Paper>
		</AppFrame>
	);
};

export default MainPage;
