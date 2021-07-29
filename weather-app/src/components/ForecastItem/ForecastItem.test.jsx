import React from "react";
import { render } from "@testing-library/react";
import ForecastItem from "./ForecastItem";

test("ForecastItem render", async () => {
	// Validar que se renderizen los elementos correspondientes
	const { findByText } = render(
		<ForecastItem
			weekDay={"Lunes"}
			hour={10}
			state={"sunny"}
			temperature={23}
		></ForecastItem>
	);
	const weekDay = await findByText("Lunes");
	const hour = await findByText(/10/);
	const temperature = await findByText(/23/);

	expect(weekDay).toHaveTextContent("Lunes");
	expect(hour).toHaveTextContent("10 hrs");
	expect(temperature).toHaveTextContent("23 °C");
});
