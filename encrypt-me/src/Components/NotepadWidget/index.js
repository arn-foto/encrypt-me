import React from "react";
import AddNote from "../NotepadWidget/AddNote";
import NoteList from "../NotepadWidget/NoteList";
import { NotepadContainer } from "./styles";

function NotepadWidget() {
	return (
		<NotepadContainer>
			{" "}
			<h2>Notepad</h2>
			<AddNote />
			<NoteList />
		</NotepadContainer>
	);
}
export default NotepadWidget;
