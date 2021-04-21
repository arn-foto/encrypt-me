import React from "react";
import AddNote from "../NotepadWidget/AddNote";
import NoteList from "../NotepadWidget/NoteList";
import { CalendarStyle } from "./styles";
import { GlobalContainer } from "../../Global-style/styles";
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
			<GlobalContainer>
				<CalendarStyle>
					<Calendar fullscreen={false} onPanelChange={onPanelChange} />{" "}
				</CalendarStyle>
				<AddNote />
				<NoteList />
			</GlobalContainer>
		</div>
	);
}
export default NotepadWidget;
