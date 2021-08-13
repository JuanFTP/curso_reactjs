import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Clouds from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three';

const WelcomeScreen = ({ children }) => {
	const myRefDiv = useRef(null);
	const [vanta, setVanta] = useState(0); // Vanta en 0 aún no ha sido inicializado

	// En la primer renderización "myRefDiv" es igual a "nulo", el valor inicial
	console.log("MyRefDiv", myRefDiv.current);

	useEffect(() => {
		console.log("MyRefDiv en useEffect", myRefDiv.current);

		if(!vanta) { // Vanta no está inicializado
			// Inicializado Vanta
			setVanta(Clouds({
				THREE,
				el: myRefDiv.current
			}));

			console.log("Establezco Vanta en un valor diferente de 0");
		}

		// Al salir de la pantalla debemos detener el efecto
		// y des-asociar todos los recursos (div + vanta effect)
		return () => {
			// Dentro de esta función se va a realizar la tarea
			// de destruir los recursos tomados por "vanta"
			if(vanta) {
				vanta.destroy();
				console.log("Libero los recursos");
			}
		};
	}, [vanta]);

	return (
		<div className="full" ref={myRefDiv}>
			{children}
		</div>
	);
};

WelcomeScreen.propTypes = {
	children: PropTypes.node
};

export default WelcomeScreen;
