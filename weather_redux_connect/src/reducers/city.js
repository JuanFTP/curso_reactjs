/*
* NOTE Reducer city
* Se encarga de modificar la ciudad seleccionada
* invoca a las varibles typo constante definidas
* estas tendrán el nombre de la acción
*
* NOTE función pura
* Los retornos de las funciones puras solo dependen
* de los parámetros que se le han pasado, no dependerá
* de ninguna petición, o x cosa, y este no puede
* depender forzosamente de los parámetros, de igual forma
* los retornos deben ser una copia del estado, no solo
* una modificación del estado.
*
* La forma de trabajo de Redux es tener un solo estado global
* de la aplicación, se lee a través de mapStateToProps y se altera
* mediante mapDispatchToProps.
*/
import { SET_CITY } from "./../actions/index";

/*
* NOTE Filtro de acciones
* Filtra las acciones y actua de acuerdo al
* action.type
*/
export const city = (state = {}, action) => {
	switch (action.type) {
		case SET_CITY:
			/*
			* NOTE composición del nuevo estado
			* se descompone el estado y se le suma o actualiza
			* la propiedad city con el valor pasado en el
			* payload
			*/
			return { ...state, city: action.payload };
		default: {
			return state;
		}
	};
};