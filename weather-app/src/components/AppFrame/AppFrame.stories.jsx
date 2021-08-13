import React from "react";
import AppFrame from "./AppFrame";
import { BrowserRouter as Router } from "react-router-dom";

const historyAppFrame = {
	title: "AppFrame",
	component: AppFrame
};

export default historyAppFrame;

export const AppFrameExample = () => (
	<Router>
		<AppFrame></AppFrame>
	</Router>
);
