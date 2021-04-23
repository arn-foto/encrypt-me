import React from "react";
import AddNote from "../NotepadWidget/NotepadPanels/AddNote";
import NoteList from "../NotepadWidget/NotepadPanels/NoteList";
import { CalendarStyle, NotepadContainer } from "./styles";
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
				<NotepadContainer>
					{" "}
					<CalendarStyle>
						<Calendar fullscreen={false} onPanelChange={onPanelChange} />{" "}
					</CalendarStyle>
					<AddNote />
					<NoteList />
				</NotepadContainer>
			</GlobalContainer>
		</div>
	);
}
export default NotepadWidget;
