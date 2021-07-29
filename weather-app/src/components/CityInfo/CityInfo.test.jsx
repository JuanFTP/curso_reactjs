import React from "react";
import { render } from "@testing-library/react";
import CityInfo from "./CityInfo"; //SUT Subject under test (Objeto a testear)

test("CityInfo Render", async () => {
	// Arrange
	const city = "Buenos Aires";
	const country = "Argentina";
	// Render: renderiza el componente y retorna una serie  de funciones de utilidad
	// En este caso se va a usar "findAllByRole" para "consultar" a nuestro componente
	// Vamos a analizar su estado en el assert
	const { findAllByRole } = render(
		<CityInfo city={city} country={country}></CityInfo>
	);
	// Act
	// findAllByRole nos va a buscar (en este caso) todos los componentes que sean "heading" => H1, H2, H3, H4... etc.
	const cityAndCountryComponents = await findAllByRole("heading");
	//Assert
	// ¿Cuándo el test va a ser correcto?
	// Definición:
	// Cuándo en el primer elemento (heading) se encuentre la ciudad "Buenos Aires"
	// y cuándo en el segundo elemento se encuentre el país "Argentina"
	expect(cityAndCountryComponents[0]).toHaveTextContent(city);
	expect(cityAndCountryComponents[1]).toHaveTextContent(country);
	// Si estas condiciones se cumplen (expect), el test está "ok"
});
