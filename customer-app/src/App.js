import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
class App extends Component {
	renderHome = <h1>Home</h1>;

	renderCustomerContainer = <h1>Customer container</h1>;

	renderCustomerListContainer = <h1>Customer list container</h1>;

	renderCustomerNewContainer = <h1>Customer new container</h1>;

	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/customers/new" element={this.renderCustomerNewContainer}></Route>
					<Route path="/customers/:dni" element={this.renderCustomerContainer}></Route>
					<Route path="/customers" element={this.renderCustomerListContainer}></Route>
					<Route path="/" element={this.renderHome}></Route>
				</Routes>
			</BrowserRouter>
		);
	}
}

export default App;
