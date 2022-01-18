import { FETCH_CUSTOMERS } from "./../constants";
import { createAction } from "redux-actions";

const customers = [
	{
		dni: "2763281177",
		name: "Juan Temich",
		age: 27
	},
	{
		dni: "2763281347",
		name: "Duarte Ortega",
		age: 38
	},
	{
		dni: "2763281322",
		name: "Óscar Óbil",
		age: 27
	}
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);
