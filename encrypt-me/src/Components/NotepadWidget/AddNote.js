import React, { useState } from "react";
import firebase from "./firebase";

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
			{" "}
			<InputTitle value={title} onChange={(e) => setTitle(e.target.value)} />
			<BodyTextArea value={body} onChange={(e) => setBody(e.target.value)} />
			<Button onClick={addNote}>Add Note</Button>
		</div>
	);
};

export default AddNote;
