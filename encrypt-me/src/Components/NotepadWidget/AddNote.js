import firebase from "firebase";
import React, { useState } from "react";
import { Button, BodyTextArea, InputTitle, NotepadContainer } from "./styles";

const AddNote = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const addNote = () => {
		firebase.firestore().collection("notes").add({
			title,
			body,
		});

		setTitle("");
		setBody("");
	};

	return (
		<div>
			<NotepadContainer>
				{" "}
				<InputTitle value={title} onChange={(e) => setTitle(e.target.value)} />
				<BodyTextArea value={body} onChange={(e) => setBody(e.target.value)} />
				<Button onClick={addNote}>Add Note</Button>
			</NotepadContainer>
		</div>
	);
};

export default AddNote;
