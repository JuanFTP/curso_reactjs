import React from 'react';
import Button from './components/Button';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Result from './components/Result';
import './App.css';

const App = () => {
	const cHButton = text => {
		console.debug("App", text);
	};

	return (
		<div className='calc-base'>
			<Result value={"0"} />
			<div className="grid-left">
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
				<Functions onContentClear={clear => console.debug("Clear", clear)} onDelete={del => console.debug("Del", del)} />
			</div>
			<MathOperations onClickOperation={operation => console.debug("Operation", operation)} onClickEqual={equal => console.debug("Equal", equal)} />
		</div>
	);
};

export default App;