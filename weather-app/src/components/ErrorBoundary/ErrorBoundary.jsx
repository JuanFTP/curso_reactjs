import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	static getDerivedStateFromError(error) {
		return {
			hasError: true
		};
	}

	componentDidCatch(error, errorInfo) {
		console.log(error);
		console.log(errorInfo);
	}

	render() {
		return (
			this.state.hasError ? 
			(<h1>Ocurrió un error</h1>)
			:
			(this.props.children)
		);
	}
};
