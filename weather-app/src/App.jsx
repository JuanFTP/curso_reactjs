import React, { useState, useCallback, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
	const [allWeather, setAllWeather] = useState({});
	const [allChartData, setAllChartData] = useState({});
	const [allForecastItemList, setAllForecastItemList] = useState({});

	const onSetAllWeather = useCallback((weatherCity) => {
		setAllWeather(allWeather => {
			return ({ ...allWeather, ...weatherCity });
		});
	}, [setAllWeather]);

	const onSetChartData = useCallback((chartDataCity) => {
		setAllChartData(allChartData => {
			return ({ ...allChartData, ... chartDataCity });
		});
	}, [setAllChartData]);

	const onSetForecastItemList = useCallback((forecastItemListCity) => {
		setAllForecastItemList(allForecastItemList => {
			return ({ ...allForecastItemList, ...forecastItemListCity });
		});
	}, [setAllForecastItemList]);

	const actions = useMemo(() => (
		{
			onSetAllWeather,
			onSetChartData,
			onSetForecastItemList
		}
	), [onSetAllWeather, onSetChartData, onSetForecastItemList]);

	const data = useMemo(() => (
		{
			allWeather,
			allChartData,
			allForecastItemList
		}
	), [allWeather, allChartData, allForecastItemList]);

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<WelcomePage />
				</Route>

				<Route exact path="/main">
					<MainPage data={data} actions={actions} />
				</Route>

				<Route path="/city/:countryCode/:city">
					<CityPage data={data} actions={actions} />
				</Route>

				<Route>
					<NotFoundPage />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
