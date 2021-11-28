import React, { useCallback } from 'react'
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';

function TodoList({ items }) {
	const onClickRemove = useCallback((item) => {
		console.log(item);
	}, []);

	return (
		<div className="list">
			{items && items.map(index => <TodoItem key={index.item} item={index.item} onClickRemove={onClickRemove}></TodoItem>)}
		</div>
	);
}

/*
* NOTE
* La función connect() conecta un componente React a un store Redux.
* Proporciona a su componente conectado las piezas de datos que necesita del store
* y las funciones que puede usar para enviar acciones al store.
*
* El connect es un Higher Order Component o "Componente de orden superior"
*
*
* Si queremos setear o definir solo algunas propiedades del estado global que este
* componente deba saber se usa un mapStateProps para definir qué parámetros recibirá el
* componente conectado al store de Redux
*/

const mapStateToProps = (state) => {
	return {
		items: state.items
	};
};

export default connect(mapStateToProps)(TodoList);
