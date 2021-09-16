import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const errorBoundary = {
	title: "ErrorBoundary",
	component: ErrorBoundary
};

export default errorBoundary;

const prop = undefined;
const ComponentWithoutError = () => <h1>Sin error</h1>;
const ComponentWithError = () => <h1>{prop.value}</h1>;

export const ErrorBoundaryWithError = () => (
	<ErrorBoundary>
		<ComponentWithError />
	</ErrorBoundary>
);

export const ErrorBoundaryWithoutError = () => (
	<ErrorBoundary>
		<ComponentWithoutError />
	</ErrorBoundary>
);