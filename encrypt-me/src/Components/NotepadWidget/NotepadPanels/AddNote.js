import firebase from "../../../firebase";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
	NoteButtonStyle,
	BodyTextArea,
	InputTitle,
	AddNoteDiv,
} from "../styles";

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
					placeholder="+ Title  +"
					required="required"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<BodyTextArea
					placeholder="+  Note  +"
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
				<NoteButtonStyle onClick={addNote}>Add Note</NoteButtonStyle>
			</AddNoteDiv>
		</div>
	);
};

export default AddNote;
