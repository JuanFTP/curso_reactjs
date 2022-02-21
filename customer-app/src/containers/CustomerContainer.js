import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import { getCustomerByDni } from './../selectors/customers';
import { Route, withRouter } from 'react-router-dom';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';
import { fetchCustomers } from './../actions/fetchCustomers';
import { updateCustomer } from './../actions/updateCustomer';
import { deleteCustomer } from './../actions/deleteCustomer';
import { SubmissionError } from 'redux-form';

class CustomerConstainer extends Component {

	componentDidMount() {
		if (!this.props.customer) {
			this.props.fetchCustomers();
		}
	}

	handleSubmit = (values) => {
		const { id } = values;
		return this.props.updateCustomer(id, values).then(r => {
			if (r.payload && r.payload.error) {
				throw new SubmissionError(r.payload.error);
			}
		});
	};

	/*NOTE Ejecuta una función al completar el estado success del form*/
	handleOnSubmitSuccess = () => {
		this.props.history.goBack();
	};

	handleOnBack = () => {
		this.props.history.goBack();
	};

	handleOnDelete = (id) => {
		this.props.deleteCustomer(id).then(p => {
			this.props.history.goBack();
		});
	}

	// NOTE Doble negación por si no existe, lo vuelve un boleano y luego lo niega por que los boleanos son true por defecto
	renderCustomerControl = (isEdit, isDelete) => {
		if (this.props.customer) {
			const CustomerControl = isEdit ? CustomerEdit : CustomerData;
			return <CustomerControl
				{...this.props.customer}
				onSubmit={this.handleSubmit}
				onSubmitSuccess={this.handleOnSubmitSuccess}
				onBack={this.handleOnBack}
				isDeleteAllow={!!isDelete}
				onDelete={this.handleOnDelete}
			/>
		} else {
			return null;
		}
	}

	// Ruteo en subnivel
	renderBody = () => (
		<Route path="/customers/:dni/edit" children={
			({ match: isEdit }) => (
				<Route path="/customers/:dni/del" children={
					({ match: isDelete }) => (
						this.renderCustomerControl(isEdit, isDelete)
					)
				} />
			)
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
	customer: PropTypes.object,
	fetchCustomers: PropTypes.func.isRequired,
	updateCustomer: PropTypes.func.isRequired,
	deleteCustomer: PropTypes.func.isRequired
};

// Cuando usamos props, se cargan los params del componente
const mapStateToProps = (state, props) => ({
	customer: getCustomerByDni(state, props)
});

export default withRouter(connect(mapStateToProps, {
	fetchCustomers,
	updateCustomer,
	deleteCustomer
})(CustomerConstainer));
