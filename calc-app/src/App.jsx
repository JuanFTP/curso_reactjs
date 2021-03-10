import React from 'react';
import Result from './components/Result';
import './App.css';

const App = () => {
	console.debug("Renderización de App");
	return (
		<div className='calc-base'>
			<Result />
		</div>
	);
};

export default App;