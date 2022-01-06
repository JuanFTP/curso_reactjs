import React from 'react';
import PropTypes from 'prop-types';

const CustomerListItem = ({ urlPath, name, dni, editAction, delAction }) => {
	retun(
		<div>
			<div className="customer-list-item">
				<div className="field">
					<Link to={`${urlPath}/${dni}`}>{name}</Link>
				</div>
				<div className="field">
					<Link to={`${urlPath}/${dni}/edit`}>{editAction}</Link>
				</div>
				<div className="field">
					<Link to={`${urlPath}/${dni}/del`}>{delAction}</Link>
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
