import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = ({ name, dni, age }) => {
	return (
		<div className="customer-edit">
			<h2>Datos del cliente (Edit)</h2>
			<div><strong>Nombre </strong><i>{name}</i></div>
			<div><strong>DNI </strong><i>{dni}</i></div>
			<div><strong>Edad </strong><i>{age}</i></div>
		</div>
	);
};

CustomerEdit.propTypes = {
	name: PropTypes.string,
	dni: PropTypes.string,
	age: PropTypes.number
};

export default CustomerEdit;
