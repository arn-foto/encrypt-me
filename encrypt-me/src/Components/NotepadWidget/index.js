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
		<div className="App">
			<h2>Notepad</h2>
		</div>
	);
}
export default NotepadWidget;
