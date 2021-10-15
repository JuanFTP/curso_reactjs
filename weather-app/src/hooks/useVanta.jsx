import { useRef, useEffect, useState } from "react";
import Clouds from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three';

const useVanta = () => {
	const myRefDiv = useRef(null);
	const [vanta, setVanta] = useState(0); // Vanta en 0 aún no ha sido inicializado

	// En la primer renderización "myRefDiv" es igual a "nulo", el valor inicial
	useEffect(() => {
		if(!vanta) { // Vanta no está inicializado
			// Inicializado Vanta
			setVanta(Clouds({
				THREE,
				el: myRefDiv.current
			}));
		}

		// Al salir de la pantalla debemos detener el efecto
		// y des-asociar todos los recursos (div + vanta effect)
		return () => {
			// Dentro de esta función se va a realizar la tarea
			// de destruir los recursos tomados por "vanta"
			if(vanta) {
				vanta.destroy();
			}
		};
	}, [vanta]);

	return myRefDiv;
}

export default useVanta;
