import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomerListItem = ({ name, dni, editAction, delAction, urlPath }) => {
	return (
		<div>
			<div className="customer-list-item">
				<div className="field">
					<Link to={`${urlPath}${dni}`}>{name}</Link>
				</div>
				<div className="field">
					<Link to={`${urlPath}${dni}/edit`}>
						<button className="btn btn-edit">
							{editAction}
						</button>
					</Link>
				</div>
				<div className="field">
					<Link to={`${urlPath}${dni}/del`}>
						<button className="btn btn-del">
							{delAction}
						</button>
					</Link>
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

export default withRouter(CustomerListItem);
