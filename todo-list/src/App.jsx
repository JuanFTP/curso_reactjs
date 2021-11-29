import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialValue = {
	items: []
};

const reducer = (state = initialValue, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return { ...state, items: [...state.items, ...action.payload] };
		case 'REMOVE_ITEM':
			return { ...state, items: state.items.filter(i => i.item !== action.payload) };
		default:
			return state;
	}
}

/*
* NOTE Store
* ¿Qué tipo de estado guarda el store?
* Guarda un tipo de estado global que se altera por los actions y
* se modifica por los payloads que llegan por los actions
*
* ¿Qué me va interesar guardar?
* - Regularmente las cosas que vienen del servidor.
* - Cosas que requieren mucho cómputo
*/

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