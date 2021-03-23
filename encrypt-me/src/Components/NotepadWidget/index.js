import React from "react";
import { NotepadContainer } from "./styles";

function NotepadWidget() {
	return (
		<div>
			<NotepadContainer>
				<h1>Notepad.</h1>
				<input placeholder="Title" />
				<textarea placeholder="Note" />
				<button>Create note</button>
			</NotepadContainer>
		</div>
	);
}

export default NotepadWidget;
