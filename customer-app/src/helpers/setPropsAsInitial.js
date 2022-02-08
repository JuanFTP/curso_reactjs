import React, { Component } from "react";

export const setPropsAsInitial = WrappedComponent => (
	class extends Component {
		render() {
			/*
				NOTE los initialValues se setean solo una vez, si se requiere que estos vuelvan a setearse tras, por ejemplo, una recarga de pantalla, deberá habilitarse la opción enableReinitialize del formulario
			*/
			console.log(this.props);
			return <WrappedComponent {...this.props} initialValues={this.props} enableReinitialize/>
		};
	}
);
