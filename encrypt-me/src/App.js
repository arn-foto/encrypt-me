import React from "react";
import Header from "./components/Header";
import "./Css/App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<h1>encrypt me</h1>
			</Router>
		</div>
	);
}

export default App;
