import React, { useState, useEffect } from "react";
import firebase from "../../../../firebase";
import {
	ListsDiv,
	ListItemDiv,
	ListTitleDiv,
	ListItemDetailDiv,
	ListItemDeleteButton,
} from "../styles";

function useLists() {
	const [lists, setLists] = useState([]);

	useEffect(() => {
		firebase
			.firestore()
			.collection("notes")
			.onSnapshot((snapshot) => {
				const lists = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));

				setLists(lists);
			});
	}, []);

	return lists;
}

const NoteList = () => {
	const lists = useLists();

	const handleOnDelete = (id) => {
		firebase.firestore().collection("notes").doc(id).delete();
	};

	return (
		<ListsDiv>
			{lists.map((list) => {
				return (
					<ListItemDiv>
						<ListTitleDiv>{list.title}</ListTitleDiv>
						<ListItemDetailDiv>{list.body}</ListItemDetailDiv>
						<ListItemDeleteButton onClick={() => handleOnDelete(list.id)} />
					</ListItemDiv>
				);
			})}
		</ListsDiv>
	);
};

export default NoteList;
