import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomersList = ({ customers, urlPath }) => {
	return (
		<div className="customer-list">
			{
				customers.map((c) => (
					<CustomerListItem
						key={c.dni}
						name={c.name}
						dni={c.dni}
						editAction={"Editar"}
						delAction={"Eliminar"}
						urlPath={urlPath}>
					</CustomerListItem>
				))
			}
		</div>
	);
};

CustomersList.propTypes = {
	customers: PropTypes.array.isRequired,
	urlPath: PropTypes.string.isRequired
};

export default CustomersList;
