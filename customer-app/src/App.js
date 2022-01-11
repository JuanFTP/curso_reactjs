import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import CustomersContainer from './containers/CustomersCotainer';
import HomeContainer from './containers/HomeContainer';

class App extends Component {

	renderHome = () => <HomeContainer></HomeContainer>;

	renderCustomerListContainer = () => <CustomersContainer></CustomersContainer>;

	renderCustomerContainer = () => <h1>Customer container</h1>;

	renderCustomerNewContainer = () => <h1>Customer new container</h1>;

	render() {
		return (
			<Router>
				<Route exact path="/" component={this.renderHome}></Route>
				<Route exact path="/customers" component={this.renderCustomerListContainer}></Route>
				<Switch>
					<Route path="/customers/new" component={this.renderCustomerNewContainer}></Route>
					<Route path="/customers/:dni" component={this.renderCustomerContainer}></Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
