import React from "react";
import Header from "./Header";
import "./Css/App.css";
import { AppBody } from "../src/Body/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<Header />
					<AppBody>
						<h1>encrypt me.</h1>
					</AppBody>
				</div>
			</Router>
		</div>
	);
}

export default App;
