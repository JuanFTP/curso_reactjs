import React from 'react';
import PropTypes from 'prop-types';
import CityInfo from './../CityInfo';
import Weather from './../Weather';

const renderCityAndCountry = cityAndCountry => {
	const { city, country } = cityAndCountry;
	return (
		<li key={city}>
			<CityInfo city={city} country={country} />
			<Weather temperature={10} state={"sunny"} />
		</li>
	);
};

// cities: es un array, y en cada item tiene que tener la ciudad pero además, el country
const CityList = ({ cities }) => {
	return (
		<ul>
			{cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))}
		</ul>
	)
}

CityList.propTypes = {
	cities: PropTypes.array.isRequired
}

export default CityList;
