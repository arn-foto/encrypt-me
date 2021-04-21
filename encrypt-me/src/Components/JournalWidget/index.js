import React from "react";
import { GlobalContainer } from "../../Global-style/styles";

function JournalWidget() {
	return (
		<div>
			<h2>Journal.</h2>
			<GlobalContainer>
				<h1>Journal Widget.</h1>
				<input placeholder="Title" />
				<textarea placeholder="New entry" />
			</GlobalContainer>
		</div>
	);
}

export default JournalWidget;
