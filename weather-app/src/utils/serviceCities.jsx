const cities = [
	{ city: "San Andrés Tuxtla", country: "México", countryCode: "MX" },
	{ city: "Ciudad de México", country: "México", countryCode: "MX" },
	{ city: "Formosa", country: "Argentina", countryCode: "AR" },
	{ city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
	{ city: "Bogotá", country: "Colombia", countryCode: "CO" },
	{ city: "Madrid", country: "España", countryCode: "ES" },
	{ city: "Sonora", country: "México", countryCode: "MX" }
];

export const getCities = () => (cities);

export const getCountryCodeNameByCountryCode = (countryCode) => cities.filter(city => city.countryCode === countryCode)[0].country;