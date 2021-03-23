/* eslint no-eval: 0 */
import React, { useState } from 'react';
import Functions from './components/Functions';
import words from 'lodash.words';
import Numbers from './components/Numbers';
import MathOperations from './components/MathOperations';
import Result from './components/Result';
import './App.css';

const App = () => {
	const [stack, setStack] = useState("");
	const items = words(stack, /[^-^+^*^/]+/g);
	const value = items.length > 0 ? items[items.length - 1] : "0";

	return (
		<div className='calc-base'>
			<Result value={value} />
			<div className="grid-left">
				<Numbers
					onClickNumber={number => { setStack(`${stack}${number}`); }} />
				<Functions
					onContentClear={() => { setStack(""); }}
					onDelete={() => { if (stack.length > 0) { const newStack = stack.substring(0, stack.length - 1); setStack(newStack); } }} />
			</div>
			<MathOperations
				onClickOperation={operation => { setStack(`${stack}${operation}`); }}
				onClickEqual={equal => { setStack(eval(stack).toString()); }} />
		</div>
	);
};

export default App;