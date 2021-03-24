import styled from "styled-components";

const NotepadContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: whitesmoke;
`;

const AddNoteDiv = styled.div`
	width: 100%;
	margin: 30px auto;
	padding: 5px;
`;

const InputTitle = styled.input`
	padding: 0.5em;
	border: none;
	background: lightyellow;
	margin-bottom: 10px;
	border-radius: 3px;
`;

const BodyTextArea = styled.textarea`
	width: 500px;
	height: 300px;
	padding: 1em;
	border: none;
	background: lightyellow;
	margin-bottom: 10px;
	border-radius: 3px;
`;

const Button = styled.div`
	background: lightblue;
	color: white;
	font-size: 1em;
	padding: 10px;
	cursor: pointer;
	border-radius: 3px;
`;

export { NotepadContainer, Button, BodyTextArea, InputTitle, AddNoteDiv };
