/* eslint-disable no-console */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';

import './App.css';

const cities = [
	'Buenos Aires,ar',
	'Washington,us',
	'Bogota,co',
	'Mexico,mx',
	'Madrid,es'
];

class App extends Component {

	constructor() {
		super();
		this.state = { city: null };
	}

	handleSelectedLocation = city => {
		this.setState({ city });

		console.log(`handleSelectedLocation ${city}`);

		this.props.setCity(city);
	}

	render() {
		const { city } = this.state;

		return (
			<MuiThemeProvider>
				<Grid>
					<Row>
						<Col xs={12}>
							<AppBar title="Weather App" />
						</Col>
					</Row>
					<Row>
						<Col xs={12} md={6}>
							<LocationList cities={cities}
								onSelectedLocation={this.handleSelectedLocation} ></LocationList>
						</Col>
						<Col xs={12} md={6}>
							<Paper zDepth={4}>
								<div className='detail'>
									{
										city &&
										<ForecastExtended city={city}></ForecastExtended>
									}
								</div>
							</Paper>
						</Col>
					</Row>
				</Grid>
			</MuiThemeProvider>
		);
	}
}

/*
* NOTE
* Vincula react con redux
* el mapDispatchToProps alimenta al componente de los props que necesita que están mapeados
* en el actions
*/
const mapDispatchToProps = (dispatch) => ({
	setCity: (value) => dispatch(setCity(value))
});

/*
* NOTE HIGHT ORDER COMPONENT
* Genera la conexión de el mapeo de props con actions y re-lanza el componente
* con los props obtenidos que este necesitará
*/
const AppConnected = connect(null, mapDispatchToProps)(App);

export default AppConnected;
