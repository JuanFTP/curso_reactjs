import { handleActions } from "redux-actions";
import { DELETE_CUSTOMER, FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMER } from "./../constants";

export const customers = handleActions({
	[FETCH_CUSTOMERS]: (state, action) => [...action.payload],
	[INSERT_CUSTOMER]: (state, action) => [...state, action.payload],
	[UPDATE_CUSTOMER]: (state, action) => {
		const customerPayload = action.payload;
		const { id } = customerPayload; // i = 2 name = 'nuevo nombre'
		/*
			NOTE
			[
				{ id: 1, name: '' },
				{ id: 2, name: 'viejo nombre' },
				{ id: 3, name: '' }
			]
		*/
		const customers = state;
		const initialValue = [];
		/*
			NOTE
			Primer iteración
			acc = []
			{ id: 1, name: '' }
			[ { id: 1, name: '' } ]

			Segunda iteración
			acc = [ { id: 1, name: '' } ]
			{ id: 2, name: 'viejo nombre', ...} => { id: 2, name: 'nuevo nombre', ...}
			[ { id: 1, name: '' }, { id: 2, name: 'nuevo nombre', ...} ]
		*/
		const newCustomers = customers.reduce((accum, customer) => {
			if (customer.id === id) {
				return [...accum, customerPayload];
			} else {
				return [...accum, customer];
			}
		}, initialValue);

		return newCustomers;
	},
	[DELETE_CUSTOMER]: (state, action) => state.filter(c => c.id !== action.payload)
}, []);
