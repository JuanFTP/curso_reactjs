import React, { FC } from "react";

/* Definimos un tipo personalizado de type, es un reflejo del esqueleto de la función que se debe validar*/
export type ButtonClickHandler = (texto: string) => void;

type Props = {
	type?: string, /* Con el ? se indica que la propiedad puede venir 'undefined'*/
	text: string,
	clickHandler: ButtonClickHandler
};

const Button: FC<Props> = ({ type, text, clickHandler }) => (
	<button className={type} onClick={() => clickHandler(text)}>
		<span>{text}</span>
	</button>
);

export default Button;
