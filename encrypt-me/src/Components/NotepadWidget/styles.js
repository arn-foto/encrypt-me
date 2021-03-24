import styled from "styled-components";

const NotepadContainer = styled.div`
	display: flex;
	flex-direction: row;
	background-color: whitesmoke;
`;

// styles for AddNote.js
const AddNoteDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 5px;
`;

const InputTitle = styled.input`
	padding: 0.5em;
	border: none;
	background: lightgoldenrodyellow;
	margin-bottom: 10px;
	border-radius: 3px;
	width: 400px;
	font-weight: bolder;
	font-size: 22px;
`;

const BodyTextArea = styled.textarea`
	width: 400px;
	height: 300px;
	padding: 0.5em;
	border: none;
	background: lightgoldenrodyellow;
	margin-bottom: 10px;
	border-radius: 3px;
	font-weight: bolder;
	font-size: 20px;
`;

const Button = styled.div`
	background: lightblue;
	color: white;
	font-size: 1em;
	padding: 10px;
	cursor: pointer;
	border-radius: 3px;
`;

// Styles for NoteList.js
const ListsDiv = styled.div`
	width: 50vh;
	height: 55vh;
	background: #afe0cc;
	margin: 5px;
	padding: 5px;
`;

const ListItemDiv = styled.div`
	background: lightgoldenrodyellow;
	border-radius: 5px;
	position: relative;
	width: 100%;
`;

const ListTitleDiv = styled.div`
	font-size: 24px;
	color: black;
	font-weight: bold;
	margin: 3px;
`;

const ListItemDetailDiv = styled.p`
	font-size: 18px;
	color: black;
	margin: 3px;
	max-height: 80px;
	overflow: auto;
`;

const ListItemDeleteButton = styled.button`
	border-radius: 5px;
	background: #c26c61;
	color: white;
	position: absolute;
	width: 15px;
	height: 15px;
	top: 5px;
	right: 10px;
	outline: none;
`;

export {
	NotepadContainer,
	Button,
	BodyTextArea,
	ListsDiv,
	InputTitle,
	ListTitleDiv,
	ListItemDiv,
	AddNoteDiv,
	ListItemDeleteButton,
	ListItemDetailDiv,
};
