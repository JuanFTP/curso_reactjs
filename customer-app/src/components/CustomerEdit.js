import React, { Component } from 'react';
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

const onlyGrow = (value, previusValue, values) => (value && (!previusValue ? value : (value > previusValue ? value : previusValue)));


class CustomerEdit extends Component {
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

	// NOTE Controlar un component no controlado, para poder setear propiedades delegadas de js
	componentDidMount() {
		if (this.txt) {
			this.txt.focus();
		}
	}

	renderField = ({ input, meta, type, label, name, placeholder, withFocus }) => {
		return (<div className="form-control">
			<label htmlFor={name}>{label}</label>
			<input
				{...input}
				type={!type ? "text" : type}
				placeholder={placeholder}
				ref={withFocus && (txt => this.txt = txt)} />
			{meta.touched && meta.error && <span className="msg-error">{meta.error}</span>}
		</div>);
	}

	render() {
		const { name, dni, age, handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props;

		return (
			<div className="customer-edit">
				<h2>Editar cliente</h2>
				<div>
					<form action="#" className="form" onSubmit={handleSubmit}>
						<Field name="name"
							withFocus
							component={this.renderField}
							type="text"
							label="Nombre"
							placeholder="Nombre (s) Apellidos"
							value={name}
							parse={toUpper}
							format={toLower}>
						</Field>
						<Field name="dni"
							component={this.renderField}
							type="text"
							validate={isNumber}
							label="DNI"
							value={dni}
							placeholder="0000000000">
						</Field>
						<Field name="age"
							component={this.renderField}
							type="number"
							validate={isNumber}
							label="Edad"
							value={age}
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
	}
};

CustomerEdit.propTypes = {
	name: PropTypes.string,
	dni: PropTypes.string,
	age: PropTypes.number,
	onBack: PropTypes.func.isRequired
};

const CustomerEditForm = reduxForm(
	{
		form: "customer-edit",
		validate
	})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);
