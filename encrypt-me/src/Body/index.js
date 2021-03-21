import React from "react";
import FinanceWidget from "../Components/FinanceWidget";
import JournalWidget from "../Components/JournalWidget";

function Body() {
	return (
		<div>
			<h1>App Body</h1>
			<FinanceWidget />
			<JournalWidget />
		</div>
	);
}

export default Body;
