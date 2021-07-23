import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CityInfo from './../CityInfo';
import Weather from './../Weather';

// renderCityAndCountry se va a converir en una función que retorna otra función
const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
	const { city, country } = cityAndCountry;
	return (
		<ListItem
			button
			key={city}
			onClick={eventOnClickCity}>
			<Grid container
				justify="center"
				alignItems="center">

				<Grid item
					md={9}
					xs={12}>
					<CityInfo city={city} country={country} />
				</Grid>
				<Grid item
					md={3}
					xs={12}>
					<Weather temperature={10} state={"sunny"} />
				</Grid>
			</Grid>
		</ListItem>
	);
};

// cities: es un array, y en cada item tiene que tener la ciudad pero además, el country
const CityList = ({ cities, onClickCity }) => {
	return (
		<List>
			{cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))}
		</List>
	)
}

CityList.propTypes = {
	cities: PropTypes.arrayOf(PropTypes.shape({
		city: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onClickCity: PropTypes.func.isRequired
}

export default CityList;
