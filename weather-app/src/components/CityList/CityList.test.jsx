import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CityList from './CityList';

const cities = [
	{ city: "Buenos Aires", country: "Argentina" },
	{ city: "Bogotá", country: "Colombia" },
	{ city: "Madrid", country: "España" },
	{ city: "Ciudad de México", country: "México" }
];

test("CityList renders", async () => {
	// AAA Arrange Act Assert
	const { findAllByRole } = render(<CityList cities={cities} onClickCity={() => { }} />);
	const items = await findAllByRole("button");

	expect(items).toHaveLength(4);
});

test("CityList click on item", async () => {
	// Debemos simular una acción del usuario: click sobre un item
	// Para eso vamos a utlizar la función "mock"
	const fnClickOnItem = jest.fn();
	const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />);
	const items = await findAllByRole("listitem");
	// Ahora, para simular la acción, vamos a utilizar fireEvent
	// fireEvent es parte de la librería testing-library/react
	fireEvent.click(items[0]);
	// ¿Ahora qué tuvo que suceder?
	// Se debió llamar a la función fnClickOnItem UNA única vez
	expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});