import React from 'react';

function TodoInput() {
	return (
		<div className="form">
			<form>
				<input type="text" className="input txt" placeholder={"Ingresa el item"}/>
				<button className="btn btn-submit" type="submit"> Agregar</button>
			</form>
		</div>
	);
}

export default TodoInput;
