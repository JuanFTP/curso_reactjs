export const apiGet = (url) => () => fetch(url).then(v => v.json());

/*
	NOTE Actualización con validación de error en la respuesta
	Se incluye validación del lado del servidor, validando por ejemplo la edad
	vinculado al server, usando en este caso el archivo node-server.js
*/
export const apiPut = (url, id, obj) =>
	fetch(`${url}/${id}`, {
		method: 'PUT',
		body: JSON.stringify(obj),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	})
		.then(v => v.json())
		.then(r => {
			if (r.error) {
				return ({ error: r.validation });
			}

			return r;
		});

export const apiPost = (url, obj) => () =>
	fetch(`${url}`, {
		method: 'POST',
		body: JSON.stringify(obj),
		headers: new Headers({ 'Content-Type': 'application/json' })
	})
		.then(v => v.json())
		.then(r => {
			if (r.error) {
				return new Error(r.validation)
			}
			return r;
		});

export const apiDel = (url, id) => () =>
	fetch(`${url}/${id}`, {
		method: 'DELETE',
		headers: new Headers({ 'Content-Type': 'application/json' })
	})
		.then(v => v.json())
		.then(r => {
			if (r.error) {
				return new Error(r.validation)
			}
			return id;
		});
