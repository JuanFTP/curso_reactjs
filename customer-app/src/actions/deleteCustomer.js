import { DELETE_CUSTOMER } from "./../constants";
import { createAction } from "redux-actions";
import { apiDel } from "./../api";
import { urlCustomers } from "./../api/urls";

export const deleteCustomer = createAction(DELETE_CUSTOMER, (id) => apiDel(urlCustomers, id)());
