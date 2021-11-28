import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialValue = {
	items: [
		{ item: "Uno" },
		{ item: "Dos" },
		{ item: "Tres" },
		{ item: "Cuatro" },
		{ item: "Cinco" }
	]
};

const reducer = (state = initialValue, action) => {
	return state;
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<div className="container">
					<TodoInput></TodoInput>
					<TodoList></TodoList>
				</div>
			</div>
		</Provider>
	);
}

export default App;