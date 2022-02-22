import React, { Component } from 'react';
import { connect } from 'react-redux';

export const accessControl = permissionsRequired => WrappedComponent => {
	const SecuredControl = class extends Component {
		render() {
			// NOTE Array con todos los permisos del usuario
			const { permissions } = this.props.user;

			// NOTE Valida si el usuario tiene todos los permisos, entonces le permite entrar
			const isAllow = permissionsRequired.every(p => permissions.indexOf(p) >= 0);

			if (!isAllow) {
				return (<div className="error error-denied"><i>Forbbiden</i></div>);
			} else {
				return <WrappedComponent {...this.props} />
			}
		}
	};

	/*
		NOTE Obtengo los datos desde el reducer "user"
		Se regresa el SecureContron con los permisos requeridos de acuerdo a la validación
	*/
	return connect(state => ({ user: state.user }))(SecuredControl);
};