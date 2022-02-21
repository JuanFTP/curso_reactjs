import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';

const CustomerData = ({ id, name, dni, age, onBack, isDeleteAllow, onDelete }) => {
	return (
		<div className="customer-data">
			<h2>Datos del cliente</h2>
			<div><strong>Nombre </strong><i>{name}</i></div>
			<div><strong>DNI </strong><i>{dni}</i></div>
			<div><strong>Edad </strong><i>{age}</i></div>

			<CustomersActions>
				<button onClick={onBack} className="btn btn-action">BACK</button>
				{
					isDeleteAllow && <button onClick={() => onDelete(id)} className="btn btn-primary">DELETE</button>
				}
			</CustomersActions>
		</div>
	);
};

CustomerData.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	dni: PropTypes.string.isRequired,
	age: PropTypes.number,
	onBack: PropTypes.func.isRequired,
	isDeleteAllow: PropTypes.bool.isRequired,
	onDelete: PropTypes.func
};

export default CustomerData;
