import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from './../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';
import { Prompt } from 'react-router-dom';

/*
	NOTE Las validaciones locales o por field tienen prioridad sobre las globales
	NOTE Validación global de datos
*/
const validate = (values) => {
	const error = {};
	if (!values.name) {
		error.name = "The field name is required";
	}

	if (!values.dni) {
		error.dni = "The field DNI is required";
	}

	if (!values.age) {
		error.age = "The field age is required";
	}

	return error;
};

/*
	NOTE Validación por campo
*/
const isNumber = (value) => (
	isNaN(Number(value)) && "This field should be a number"
);

const toNumber = (value) => value && Number(value);

const toUpper = (value) => value && value.toUpperCase();

const toLower = (value) => value && value.toLowerCase();

const onlyGrow = (value, previusValue, values) => value && previusValue && (value > previusValue ? value : previusValue);

const MyField = ({ input, meta, type, label, name, placeholder }) => (
	<div className="form-control">
		<label htmlFor={name}>{label}</label>
		<input {...input} type={!type ? "text" : type} placeholder={placeholder} />
		{meta.touched && meta.error && <span className="msg-error">{meta.error}</span>}
	</div>
);

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack, pristine, submitSucceeded }) => {
	/*
		NOTE
		Los datos que vengan del initialValue deben ser iguales al nombre del objeto - parámetro Field
		NOTE
		parse, transforma el dato dentro del formulario, para así enviarlo al guardar
		format, despues de extraer la información, transforma el dato para presentarlo, pero no se guarda para enviarlo
		normalize, se ejecuta despues del parse aplica reglas de validaciones adicionales a los campos util para campos por ejemplo desde y hasta
		Indicará si se realizó alguna modificación en el formulario
		<Prompt pristine />
	*/
	return (
		<div className="customer-edit">
			<h2>Editar cliente</h2>
			<div>
				<form action="#" className="form" onSubmit={handleSubmit}>
					<Field name="name"
						component={MyField}
						type="text"
						label="Nombre"
						placeholder="Juan Temich"
						parse={toUpper}
						format={toLower}>
					</Field>
					<Field name="dni"
						component={MyField}
						type="text"
						validate={isNumber}
						label="DNI"
						placeholder="0000000000">
					</Field>
					<Field name="age"
						component={MyField}
						type="number"
						validate={isNumber}
						label="Edad"
						placeholder="35"
						parse={toNumber}
						normalize={onlyGrow}>
					</Field>
					<CustomersActions>
						<button type="submit" disabled={pristine || submitting} className="btn btn-primary">Save</button>
						<button type="button" disabled={submitting} onClick={onBack} className="btn btn-action">Cancel</button>
					</CustomersActions>
					<Prompt when={!pristine && !submitSucceeded} message={"Possible data lost, continue?"} />
				</form>
			</div>

		</div>
	);
};

CustomerEdit.propTypes = {
	name: PropTypes.string,
	dni: PropTypes.string,
	age: PropTypes.number,
	onBack: PropTypes.func.isRequired
};

const CustomerEditForm = reduxForm(
	{
		form: 'customer-edit',
		validate
	})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);
