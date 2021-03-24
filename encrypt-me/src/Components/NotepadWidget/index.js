import React from "react";
import AddNote from "../NotepadWidget/AddNote";
import NoteList from "../NotepadWidget/NoteList";
import { NotepadContainer } from "./styles";

function NotepadWidget() {
	return (
		<div>
			{" "}
			<NotepadContainer>
				{" "}
				<h2>Notepad</h2>
				<AddNote />
			</NotepadContainer>
			<NoteList />
		</div>
	);
}
export default NotepadWidget;
