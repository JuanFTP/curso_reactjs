import React, { FC } from 'react';
import Button, { ButtonClickHandler } from './Button';

type Props = {
	onContentClear: ButtonClickHandler,
	onDelete: ButtonClickHandler
}

const Functions: FC<Props> = ({ onContentClear, onDelete }) => (
	<section className="functions">
		<Button type={"function"} text={"C"} clickHandler={onContentClear} />
		<Button type={"function"} text={"<"} clickHandler={onDelete} />
	</section>
);

export default Functions;
