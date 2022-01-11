import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomerListItem = ({ name, dni, editAction, delAction, urlPath }) => {
	return (
		<div>
			<div className="customer-list-item">
				<div className="field">
					<Link to={`${urlPath}${dni}`}>{name}</Link>
				</div>
				<div className="field">
					<Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
				</div>
				<div className="field">
					<Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
				</div>
			</div>
		</div>
	);
};

CustomerListItem.propTypes = {
	urlPath: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	dni: PropTypes.string.isRequired,
	editAction: PropTypes.string.isRequired,
	delAction: PropTypes.string.isRequired
};

export default CustomerListItem;
