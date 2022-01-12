import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import CustomersList from './../components/CustomersList';
import CustomersActions from './../components/CustomersActions';
import { fetchCustomers } from '../actions/fetchCustomers';

let xList = [{
	dni: "2763281177",
	name: "Juan Temich",
	age: 27
},
{
	dni: "2763281347",
	name: "Duarte Ortega",
	age: 38
}];

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
			<AppFrame header="Listado de clientes" body={this.renderBody(xList)} footer="Este es un footer"></AppFrame>
		);
	};
}

CustomersContainer.propTypes = {
	fetchCustomers: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => (
	{
		fetchCustomers: () => dispatch(fetchCustomers())
	}
);

export default withRouter(connect(null, mapDispatchToProps)(CustomersContainer));
