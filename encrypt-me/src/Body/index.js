import React from "react";
import FinanceWidget from "../Components/FinanceWidget";
import JournalWidget from "../Components/JournalWidget";
import NotepadWidget from "../Components/NotepadWidget";

function Body() {
	return (
		<div>
			<h1>App Body</h1>
			<FinanceWidget />
			<JournalWidget />
			<NotepadWidget />
		</div>
	);
}

export default Body;
