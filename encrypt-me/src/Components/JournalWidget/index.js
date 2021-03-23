import React from "react";
import { JournalContainer } from "./styles";

function JournalWidget() {
	return (
		<div>
			<JournalContainer>
				<h1>Journal Widget.</h1>
				<input placeholder="Title" />
				<textarea placeholder="New entry" />
			</JournalContainer>
		</div>
	);
}

export default JournalWidget;
