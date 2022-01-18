import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import CustomersList from './../components/CustomersList';
import CustomersActions from './../components/CustomersActions';
import { fetchCustomers } from '../actions/fetchCustomers';

class CustomersContainer extends Component {

	componentDidMount() {
		this.props.fetchCustomers();
	}

	handleAddNew = () => {
		this.props.history.push("/customers/new");
	}

	renderBody = (customers) => (
		<div className="table-content">
			<CustomersList
				customers={customers}
				urlPath="customers/">
			</CustomersList>
			<br></br>
			<br></br>
			<CustomersActions>
				<button className="btn btn-action" onClick={this.handleAddNew}>Nuevo Cliente</button>
			</CustomersActions>
		</div>
	);

	render() {
		return (
			<AppFrame header="Listado de clientes" body={this.renderBody(this.props.customers)} footer="Este es un footer"></AppFrame>
		);
	};
}

CustomersContainer.propTypes = {
	fetchCustomers: PropTypes.func.isRequired,
	customers: PropTypes.array.isRequired
};

CustomersContainer.defaultProps = {
	customers: []
};

const mapStateToProps = state => ({
	customers: state.customers
});

export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomersContainer));
