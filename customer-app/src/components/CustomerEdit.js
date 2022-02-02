import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from './../helpers/setPropsAsInitial';

const isRequired = (value) => (
	!value && "This field is required"
);

const MyField = ({ input, meta, type, label, name, placeholder }) => (
	<div class="form-control">
		<label htmlFor={name}>{label}</label>
		<input {...input} type={!type ? "text" : type} placeholder={placeholder}/>
		{meta.touched && meta.error && <span className="msg-error">{meta.error}</span>}
	</div>
);

const isNumber = (value) => (
	isNaN(Number(value)) && "This field should be a number"
);

const CustomerEdit = ({ name, dni, age }) => {
	/* NOTE
		Los datos que vengan del initialValue deben ser iguales al nombre del objeto - parámetro Field
	*/
	return (
		<div className="customer-edit">
			<h2>Editar cliente</h2>
			<div>
				<form action="#" className="form">
					<Field name="name"
						component={MyField}
						type="text"
						validate={isRequired}
						label="Nombre"
						placeholder="Juan Temich">
					</Field>
					<Field name="dni"
						component={MyField}
						type="text"
						validate={[isRequired, isNumber]}
						label="DNI"
						placeholder="0000000000">
					</Field>
					<Field name="age"
						component={MyField}
						type="number"
						validate={isNumber}
						label="Edad"
						placeholder="35">
					</Field>
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
