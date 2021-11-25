import React, { FC } from 'react';

/* Define las propiedades y los tipos que se requieren en el componente*/
type Props = {
	value: string
};

const Result: FC<Props> = ({ value }) => (
	<div className="result">
		<span>{value}</span>
	</div>
);

Result.defaultProps = {
	value: "0"
};

export default Result;
