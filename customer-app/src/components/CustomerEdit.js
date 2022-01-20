import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from './../helpers/setPropsAsInitial';

const CustomerEdit = ({ name, dni, age }) => {
	/* NOTE
		Los datos que vengan del initialValue deben ser iguales al nombre del objeto - parámetro Field
	*/
	return (
		<div className="customer-edit">
			<h2>Editar cliente</h2>
			<div>
				<form action="#" className="form">
					<div>
						<label htmlFor="name">Nombre</label>
						<Field name="name" component="input" type="text"></Field>
					</div>
					<div>
						<label htmlFor="dni">DNI</label>
						<Field name="dni" component="input" type="text"></Field>
					</div>
					<div>
						<label htmlFor="age">Edad</label>
						<Field name="age" component="input" type="number"></Field>
					</div>
				</form>
			</div>

		</div>
	);
};

CustomerEdit.propTypes = {
	name: PropTypes.string,
	dni: PropTypes.string,
	age: PropTypes.number
};

const CustomerEditForm = reduxForm({ form: 'customer-edit' })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);
