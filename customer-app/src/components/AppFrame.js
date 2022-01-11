import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

const AppFrame = ({ header, body, footer }) => {
	return (
		<div>
			<div className="app-frame">
				<AppHeader title={header} />
				<div className="app-body">{body}</div>
				<div className="app-footer">{footer}</div>
			</div>
		</div>
	);
};

AppFrame.propTypes = {
	header: PropTypes.string.isRequired,
	body: PropTypes.element.isRequired
}

export default AppFrame;
