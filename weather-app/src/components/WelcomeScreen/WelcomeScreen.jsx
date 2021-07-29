import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const WelcomeScreen = ({ children }) => {
	const myRefDiv = useRef(null);

	// En la primer renderización "myRefDiv" es igual a "nulo", el valor inicial
	console.log("MyRefDiv", myRefDiv.current);

	useEffect(() => {
		console.log("MyRefDiv en useEffect", myRefDiv.current);
	});

	return <div ref={myRefDiv}>WelcomeScreen</div>;
};

WelcomeScreen.propTypes = {
	children: PropTypes.node,
};

export default WelcomeScreen;
