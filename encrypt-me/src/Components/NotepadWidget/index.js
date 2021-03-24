import React from "react";
import AddNote from "../NotepadWidget/AddNote";
import NoteList from "../NotepadWidget/NoteList";
import { NotepadContainer } from "./styles";

function NotepadWidget() {
	return (
		<div>
			{" "}
			<h2>Notepad</h2>
			<NotepadContainer>
				{" "}
				<AddNote />
				<NoteList />
			</NotepadContainer>
		</div>
	);
}
export default NotepadWidget;
