import React from "react";
import { AppBody, LinkBody } from "./styles";
import ExpenseWidget from "../Components/ExpenseWidget";
import JournalWidget from "../Components/JournalWidget";
import NotepadWidget from "../Components/NotepadWidget";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Body() {
	return (
		<AppBody>
			{" "}
			<Router>
				<LinkBody>
					<Link to="/journal">Journal</Link>
					<Link to="/finance">Expenses</Link>
					<Link to="/notes">Notes</Link>{" "}
				</LinkBody>
				<Route path="/journal">
					<JournalWidget />
				</Route>
				<Route path="/finance">
					<ExpenseWidget />
				</Route>
				<Route path="/notes">
					<NotepadWidget />
				</Route>
			</Router>
		</AppBody>
	);
}

export default Body;
