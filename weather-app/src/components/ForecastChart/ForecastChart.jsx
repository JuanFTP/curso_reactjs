import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const ForecastChart = ({ data }) => {
	return (
		<div>
			<ResponsiveContainer height={320} width={"95%"}>
				<LineChart
					margin={{ top: 40, bottom: 40, left: 5, right: 5 }}
					data={data}>
					<XAxis dataKey="dayHour"></XAxis>
					<YAxis></YAxis>
					<CartesianGrid></CartesianGrid>
					<Tooltip></Tooltip>
					<Legend></Legend>
					<Line type="monotone" dataKey="max" stroke="#FF0000"></Line>
					<Line type="monotone" dataKey="min" stroke="#0000FF"></Line>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

ForecastChart.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		dayHour: PropTypes.string.isRequired,
		min: PropTypes.number.isRequired,
		max: PropTypes.number.isRequired
	})).isRequired
};

export default ForecastChart;
