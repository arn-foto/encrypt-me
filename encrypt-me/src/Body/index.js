import React from "react";
import FinanceWidget from "../Components/FinanceWidget";
import JournalWidget from "../Components/JournalWidget";
import NotepadWidget from "../Components/NotepadWidget";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBody } from "./styles";

function Body() {
	return (
		<div>
			<Router>
				<AppBody>
					{" "}
					<h1>App Body</h1>
					<FinanceWidget />
					<JournalWidget />
					<NotepadWidget />
				</AppBody>
			</Router>
		</div>
	);
}

export default Body;
