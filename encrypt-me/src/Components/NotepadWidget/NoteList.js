// import React, { useState, useEffect } from "react";
// import firebase from "firebase";

// function useLists() {
// 	const [lists, setLists] = useState([]);

// 	useEffect(() => {
// 		firebase
// 			.firestore()
// 			.collection("notes")
// 			.onSnapshot((snapshot) => {
// 				const lists = snapshot.docs.map((doc) => ({
// 					id: doc.id,
// 					...doc.data(),
// 				}));

// 				setLists(lists);
// 			});
// 	}, []);

// 	return lists;
// }

// const NoteList = () => {
// 	const lists = useLists();

// 	const handleOnDelete = (id) => {
// 		firebase.firestore().collection("notes").doc(id).delete();
// 	};

// 	return (
// 		<div>
// 			{lists.map((list) => {
// 				return (
// 					<div>
// 						<div>{list.title}</div>
// 						<div>{list.body}</div>
// 						<button onClick={() => handleOnDelete(list.id)} />
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// };

// export default NoteList;
