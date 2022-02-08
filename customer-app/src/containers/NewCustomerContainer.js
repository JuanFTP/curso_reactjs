import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import CustomerEdit from './../components/CustomerEdit';
import { withRouter } from 'react-router-dom';

class NewCustomerContainer extends Component {
	handleSubmit = () => {

	}

	handleSubmitSuccess = () => {

	}

	handleOnBack = () => {
		this.props.history.goBack();
	}

	renderBody = () => {
		return <CustomerEdit
			onSubmit={this.handleSubmit}
			onSubmitSuccess={this.handleSubmitSuccess}
			onBack={this.handleOnBack} />;
	}

	render() {
		return (
			<div>
				<AppFrame
					header="Nuevo cliente"
					body={this.renderBody()}
					footer="Este es un footer">
				</AppFrame>
			</div>
		);
	};
}

export default withRouter(connect(null, null)(NewCustomerContainer));
