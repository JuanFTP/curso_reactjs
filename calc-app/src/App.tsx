/* eslint no-eval: 0 */
import { useState, FC } from 'react';
import Functions from './components/Functions';
import words from 'lodash.words';
import Numbers from './components/Numbers';
import MathOperations from './components/MathOperations';
import Result from './components/Result';
import './App.css';

/* Con la importación FC defique es un componente funcional, por lo que cuando se utilize se validarán sus tipos */
const App: FC = () => {
	const [stack, setStack] = useState("");
	const items = words(stack, /[^-^+^*^/]+/g);
	const value = items.length > 0 ? items[items.length - 1] : "0";

	return (
		<main className='calc-base'>
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
		</main>
	);
};

export default App;