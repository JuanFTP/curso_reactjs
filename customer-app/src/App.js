import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import CustomerContainer from './containers/CustomerContainer';
import CustomersContainer from './containers/CustomersCotainer';
import HomeContainer from './containers/HomeContainer';

class App extends Component {

	renderCustomerNewContainer = () => <h1>Customer new container</h1>;

	render() {
		return (
			<Router>
				<Route exact path="/" component={HomeContainer}></Route>
				<Route exact path="/customers" component={CustomersContainer}></Route>
				<Switch>
					<Route path="/customers/new" component={this.renderCustomerNewContainer}></Route>
					<Route path="/customers/:dni" render={props => <CustomerContainer dni={props.match.params.dni} />}></Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
