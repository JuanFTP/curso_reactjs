import React from 'react';
import Button from './components/Button';
import MathOperations from './components/MathOperations';
import Result from './components/Result';
import './App.css';

const App = () => {
	const cHButton = text => {
		console.debug("App clickHandlerButton", text);
	};

	return (
		<div className='calc-base'>
			<Result value={"0"} />
			<div className="numbers">
				<Button type="number" text="1" clickHandler={cHButton} />
				<Button type="number" text="2" clickHandler={cHButton} />
				<Button type="number" text="3" clickHandler={cHButton} />
				<Button type="number" text="4" clickHandler={cHButton} />
				<Button type="number" text="5" clickHandler={cHButton} />
				<Button type="number" text="6" clickHandler={cHButton} />
				<Button type="number" text="7" clickHandler={cHButton} />
				<Button type="number" text="8" clickHandler={cHButton} />
				<Button type="number" text="9" clickHandler={cHButton} />
				<Button type="number" text="0" clickHandler={cHButton} />
			</div>
			<MathOperations></MathOperations>
		</div>
	);
};

export default App;