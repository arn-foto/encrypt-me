import React from "react";
import FinanceWidget from "../Components/FinanceWidget";
import JournalWidget from "../Components/JournalWidget";
import NotepadWidget from "../Components/NotepadWidget";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBody, LinkBody } from "./styles";

function Body() {
	return (
		<div>
			<Router>
				<LinkBody>
					<Link to="/journal">Journal</Link>
					<Link to="/finance">Finance</Link>
					<Link to="/notes">Notes</Link>
				</LinkBody>

				<AppBody>
					<Route path="/journal">
						<JournalWidget />
					</Route>
					<Route path="/finance">
						<FinanceWidget />
					</Route>
					<Route path="/notes">
						<NotepadWidget />
					</Route>
				</AppBody>
			</Router>
		</div>
	);
}

export default Body;
