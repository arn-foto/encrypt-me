import React from "react";
import AddNote from "../NotepadWidget/AddNote";
import NoteList from "../NotepadWidget/NoteList";
import { NotepadContainer, CalendarStyle } from "./styles";
import { Calendar } from "antd";
import "antd/dist/antd.css";

function onPanelChange(value, mode) {
	console.log(value, mode);
}

function NotepadWidget() {
	return (
		<div>
			{" "}
			<h2>Notepad</h2>
			<NotepadContainer>
				<CalendarStyle>
					<Calendar fullscreen={false} onPanelChange={onPanelChange} />{" "}
				</CalendarStyle>
				<AddNote />
				<NoteList />
			</NotepadContainer>
		</div>
	);
}
export default NotepadWidget;
