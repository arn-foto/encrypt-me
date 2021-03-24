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
// Styles for Note's output
const ListsDiv = styled.div`
	width: 40%;
	height: 100%;
	background: #dedede;
	margin: 30px auto;
	padding: 20px;
`;

const ListItemDiv = styled.div`
	background: #b2c4db;
	border-radius: 5px;
	position: relative;
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
