import firebase from "../../firebase";
import React, { useState } from "react";
import { Button, BodyTextArea, InputTitle, AddNoteDiv } from "./styles";

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
			<AddNoteDiv>
				{" "}
				<InputTitle
					placeholder="+  +  +"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<BodyTextArea
					placeholder="+ + +"
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
				<Button onClick={addNote}>Add Note</Button>
			</AddNoteDiv>
		</div>
	);
};

export default AddNote;
