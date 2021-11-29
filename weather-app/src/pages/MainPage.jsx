import React from "react";
import { useNavigate } from "react-router-dom";
import AppFrame from "./../components/AppFrame";
import CityList from "./../components/CityList";
import Paper from "@material-ui/core/Paper";
import { getCities } from "./../utils/serviceCities";

const MainPage = () => {
	const navigate = useNavigate();
	const onClickHandler = React.useCallback((city, countryCode) => {
		// navigate() permite alterar la URL del navegador por programación
		navigate(`/city/${countryCode}/${city}`);
	}, [navigate]);

	return (
		<AppFrame>
			<Paper elevation={1} className="mt mb pl pr">
				<CityList
					cities={getCities()}
					onClickCity={onClickHandler}
				></CityList>
			</Paper>
		</AppFrame>
	);
};

export default MainPage;
