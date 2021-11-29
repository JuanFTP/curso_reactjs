import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';

function TodoInput({ addItem }) {
	const [value, setValue] = useState('');

	const onSubmit = useCallback((e) => {
		e.preventDefault();
		/*
		* NOTE Action Creator addItem
		* Un action creator es una función que genera acciones (es decir, objetos
		* con "type" y "payload")
		*/
		if(value !== "") {
			addItem(value);
			setValue('');
		}
	}, [value, addItem]);

	return (
		<div className="form">
			<form onSubmit={onSubmit}>
				<input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="input txt" placeholder={"Ingresa el item"} />
				<button className="btn btn-submit" type="submit"> Agregar</button>
			</form>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return ({
		addItem: (value) => {
			return dispatch({
				type: 'ADD_ITEM',
				payload: [{
					item: value
				}]
			});
		}
	});
};

export default connect(null, mapDispatchToProps)(TodoInput);
