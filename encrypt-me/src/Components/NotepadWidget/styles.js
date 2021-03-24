import styled from "styled-components";

const NotepadContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: lightsalmon;
`;

const AddNoteDiv = styled.div`
	display: flex;
	width: 40%;
	flex-direction: column;
	margin: 30px auto;
	padding: 5px;
`;

const InputTitle = styled.input`
	padding: 0.5em;
	border: none;
	background: #f4f4;
	margin-bottom: 10px;
	border-radius: 3px;
`;

const BodyTextArea = styled.textarea`
	padding: 0.5em;
	border: none;
	height: 80px;
	background: #f4f4;
	margin-bottom: 10px;
	border-radius: 3px;
`;

const Button = styled.div`
	background: blue;
	color: white;
	font-size: 1em;
	padding: 10px;
	cursor: pointer;
	border-radius: 3px;
`;

export { NotepadContainer, Button, BodyTextArea, InputTitle, AddNoteDiv };
