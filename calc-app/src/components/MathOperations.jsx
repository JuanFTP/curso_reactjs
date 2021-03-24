import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const MathOperations = ({ onClickOperation, onClickEqual }) => (
	<section className="math-operations">
		<Button type={"operation"} text={"+"} clickHandler={onClickOperation} />
		<Button type={"operation"} text={"-"} clickHandler={onClickOperation} />
		<Button type={"operation"} text={"*"} clickHandler={onClickOperation} />
		<Button type={"operation"} text={"/"} clickHandler={onClickOperation} />
		<Button type={"operation"} text={"="} clickHandler={onClickEqual} />
	</section>
);

MathOperations.propTypes = {
	onClickOperation: PropTypes.func.isRequired,
	onClickEqual: PropTypes.func.isRequired
};

export default MathOperations;