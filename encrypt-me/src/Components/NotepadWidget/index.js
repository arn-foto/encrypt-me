import React from "react";
import { NotepadContainer } from "./styles";

function NotepadWidget() {
	return (
		<div>
			<NotepadContainer>
				<h1>Notepad Widget.</h1>
				<input placeholder="New note" />
			</NotepadContainer>
		</div>
	);
}

export default NotepadWidget;
