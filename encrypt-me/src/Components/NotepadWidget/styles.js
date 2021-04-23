import styled from "styled-components";

const NotepadContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

// styles for AddNote.js
const AddNoteDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 6px;
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
	border-bottom: 1px solid black;
	box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
	-ms-overflow-style: none;
	scrollbar-width: none;
`;

const BodyTextArea = styled.textarea`
	display: flex;
	flex-direction: column;
	width: 400px;
	height: 450px;
	border: none;
	background: lightgoldenrodyellow;
	font-weight: bolder;
	font-size: 20px;
	border-bottom: 1px solid black;
	box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;

const Button = styled.div`
	font-size: 1em;
	padding: 10px;
	cursor: pointer;
	border-radius: 3px;
	border: 1px solid black;
	box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);

	:hover {
		opacity: 0.9;
		background-color: #b8e3c9;
	}
`;

// Styles for NoteList.js
const ListsDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 25%;
	height: 25%;
	padding: 0.5em;
`;

const ListItemDiv = styled.div`
	background: lightgoldenrodyellow;
	border-radius: 5px;
	position: relative;
	width: 100%;
	height: 50%;
	padding: 0.5em;
	font-size: 20px;
	border-bottom: 1px solid black;
	box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);

	:hover {
		opacity: 0.9;
		background-color: lightyellow;
		cursor: pointer;
	}
`;

const ListTitleDiv = styled.div`
	font-size: 20px;
	color: black;
	font-weight: bold;
	margin: 3px;
`;

const ListItemDetailDiv = styled.p`
	font-size: 18px;
	color: black;
	margin: 3px;
	/* max-height: 80px; */
	overflow: auto;
`;

const ListItemDeleteButton = styled.button`
	border-radius: 5px;
	background: cyan;
	color: white;
	position: absolute;
	width: 15px;
	height: 15px;
	top: 5px;
	right: 10px;
	outline: none;
	:hover {
		opacity: 0.9;
		background-color: black;
		cursor: pointer;
	}
`;

const CalendarStyle = styled.div`
	width: 300px;
	border-radius: 2px;
	opacity: 0.9;
	padding: 10px;
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
	CalendarStyle,
};
