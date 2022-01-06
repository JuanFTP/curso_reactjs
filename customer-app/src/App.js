import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<Router>
			<div className="app">
				<Link to="/customers">Customers</Link>
				<Link to="/customers/30000000">Customers 30,000,000.00</Link>
			</div>
		</Router>
	);
}

export default App;
