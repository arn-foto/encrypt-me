import React from "react";
import { AppBody, LinkBody } from "./styles";
import FinanceWidget from "../Components/FinanceWidget";
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
					<Link to="/finance">Finance</Link>
					<Link to="/notes">Notes</Link>{" "}
					<Route path="/journal">
						<JournalWidget />
					</Route>
					<Route path="/finance">
						<FinanceWidget />
					</Route>
					<Route path="/notes">
						<NotepadWidget />
					</Route>
				</LinkBody>
			</Router>
		</AppBody>
	);
}

export default Body;
