import React from "react";
import Weather from "./Weather";
import { render } from "@testing-library/react";

test("Weather cloudy", async () => {
	const { findByRole } = render(<Weather temperature={10} state="cloudy" />);

	const temp = await findByRole("heading");

	expect(temp).toHaveTextContent("10");
});
