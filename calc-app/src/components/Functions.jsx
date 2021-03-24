import React from 'react';
import Button from './Button';

const Functions = ({ onContentClear, onDelete }) => (
	<section className="functions">
		<Button type={"function"} text={"C"} clickHandler={onContentClear} />
		<Button type={"function"} text={"<"} clickHandler={onDelete} />
	</section>
);

export default Functions;