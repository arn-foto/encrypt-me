import React from "react";
import AddNote from "../NotepadWidget/AddNote";
import NoteList from "../NotepadWidget/NoteList";
import { NotepadContainer } from "./styles";
import firebase from "../../firebase";

function NotepadWidget() {
	firebase.firestore().collection("notes").add({
		title: "title works",
		body: "body works",
	});
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
