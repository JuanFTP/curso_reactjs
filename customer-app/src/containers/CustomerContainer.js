import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import { getCustomerByDni } from './../selectors/customers';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';

class CustomerConstainer extends Component {

	// Ruteo en subnivel
	renderBody = () => (
		<Route path="/customers/:dni/edit" children={
			({ match }) => {
				const CustomerControl = match ? CustomerEdit : CustomerData;
				return <CustomerControl {...this.props.customer} />
			}
		} />
	);

	render() {
		return (
			<AppFrame
				header={`Cliente: ${this.props.dni}`}
				body={this.renderBody()}
				footer="Este es un footer">
			</AppFrame>
		);
	};
};

CustomerConstainer.propTypes = {
	dni: PropTypes.string.isRequired,
	customer: PropTypes.object.isRequired
};

// Cuando usamos props, se cargan los params del componente
const mapStateToProps = (state, props) => ({
	customer: getCustomerByDni(state, props)
});

export default connect(mapStateToProps, null)(CustomerConstainer);
