import React from "react";
import { GlobalContainer } from "../../Global-style/styles";
import { JournalContainer } from "./styles";

function JournalWidget() {
	return (
		<div>
			<h2>Journal</h2>
			<GlobalContainer>
				<JournalContainer>
					<input placeholder="Title" />
					<textarea placeholder="New entry" />
				</JournalContainer>
			</GlobalContainer>
		</div>
	);
}

export default JournalWidget;
