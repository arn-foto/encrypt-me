import React from "react";
import { NotepadContainer } from "./styles";

function NotepadWidget() {
	return (
		<div>
			<NotepadContainer>
				<h1>Notepad.</h1>
				<input placeholder="New note" />
				<textarea />
			</NotepadContainer>
		</div>
	);
}

export default NotepadWidget;
