import React from "react";
import Header from "./Header";
import Body from "./Body";
import "./Css/App.css";
import { AppBody } from "../src/Body/styles";

function App() {
	return (
		<div className="App">
			<Header />
			<Body />
		</div>
	);
}

export default App;
