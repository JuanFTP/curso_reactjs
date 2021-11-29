import React, { FC } from 'react';
import Button, { ButtonClickHandler } from './Button';

type Props = {
	onClickOperation: ButtonClickHandler,
	onClickEqual: ButtonClickHandler
};

const MathOperations: FC<Props> = ({ onClickOperation, onClickEqual }) => (
	<section className="math-operations">
		<Button type={"operation"} text={"+"} clickHandler={onClickOperation} />
		<Button type={"operation"} text={"-"} clickHandler={onClickOperation} />
		<Button type={"operation"} text={"*"} clickHandler={onClickOperation} />
		<Button type={"operation"} text={"/"} clickHandler={onClickOperation} />
		<Button type={"operation"} text={"="} clickHandler={onClickEqual} />
	</section>
);

export default MathOperations;
