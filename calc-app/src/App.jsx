import React from 'react';
import Functions from './components/Functions';
import Numbers from './components/Numbers';
import MathOperations from './components/MathOperations';
import Result from './components/Result';
import './App.css';

const App = () => {
	return (
		<div className='calc-base'>
			<Result value={"0"} />
			<div className="grid-left">
				<Numbers onClickNumber={number => console.debug("Number", number)} />
				<Functions onContentClear={clear => console.debug("Clear", clear)} onDelete={del => console.debug("Del", del)} />
			</div>
			<MathOperations onClickOperation={operation => console.debug("Operation", operation)} onClickEqual={equal => console.debug("Equal", equal)} />
		</div>
	);
};

export default App;