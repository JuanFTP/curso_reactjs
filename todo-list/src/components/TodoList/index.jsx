import React, { useCallback } from 'react'
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';

function TodoList({ items, removeItem }) {
	const onClickRemove = useCallback((item) => {
		/*
		* NOTE Action Creator removeItem
		*/
		removeItem(item);
	}, [removeItem]);

	return (
		<div className="list">
			{items && items.map(i => <TodoItem key={i.item} {...i} onClickRemove={onClickRemove}></TodoItem>)}
		</div>
	);
}

/*
* NOTE Function connect
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

const mapDispatchToProps = (dispatch) => {
	return {
		removeItem: (value) => {
			return dispatch({
				type: 'REMOVE_ITEM',
				payload: value
			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
