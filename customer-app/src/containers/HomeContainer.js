import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomerActions from './../components/CustomersActions';

class HomeContainer extends Component {

	handleOnClick = () => {
		this.props.history.push("/customers");
	}

	render() {
		return (
			<AppFrame header="Home" body={
				<div>
					Esta es la pantalla inicial
					<br></br>
					<br></br>
					<CustomerActions>
						<button onClick={this.handleOnClick} className="btn btn-primary">Listado de clientes</button>
					</CustomerActions>
				</div>
			} footer="Footer de home"></AppFrame>
		);
	};
}

export default withRouter(HomeContainer);
